// .then(function () {}, function () {}}
// the first is resolve (pending -> resolve)
// the second is optional (pending -> reject)

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');  
    });
}

delay(1000).then((value) => {
    console.log(value)
});

// => done

//****************************************************************


function delay(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(reject, ms, new Error("error happened"))
	});
}

delay(1000).then((value) => {
	console.log('resolve: ', value);
}, (err) => {
	console.log('reject: ', err);
});

// => reject: Error: error happened


//****************************************************************

function delay(ms) {
    return new Promise((resolve, reject) => {
    	console.log('new Promise object execute immediately')
        setTimeout(resolve, ms, 'done');  
    });
}

delay(1000).then((value) => {
    console.log(value)
});

// => new Promise object execute immediately
// => done

//****************************************************************

// p2 state depends on p1
var p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000)
})
var p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000)
})
p2.then(result => console.log(result))
p2.catch(error => console.log(error))

// =>  Error: fail

var p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000)
})
var p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000)
})

p2.then(result => console.log(result), err => console.log("Error => ", err.message))

// => Error => fail


//****************************************************************

// Promise.prototype.catch <=> .then(null, reject)

p.then((val) => console.log("fulfilled:", val))
  .catch((err) => console.log("rejected:", err));

// equal to 

p.then((val) => console.log("fulfilled:", val))
 .then(null, (err) => console.log("rejected:", err));

//****************************************************************

// catch 3 promise object error
// 1. getJSON
// 2. .then
// 3. .then
getJSON("/post/1.json").then(function(post) {
  return getJSON(post.commentURL);
}).then(function(comments) {
  // some code
}).catch(function(error) {
  // catch 3 promise object error
});

//****************************************************************

// best practice for promise implement
// if not add catch, the promise object throw error will be silent.
// but chrome will throw error

promise.then(function(data) { //cb
            // success
        })
        .catch(function(err) {
           // error
        });

// it will listen not catch error for node
process.on('unhandledRejection', function (err, p) {
  console.error(err.stack)
});

// catch return promise object and could use .then
// if no error happened, catch callback will be not invoked
// and if then callback error happend, the before catch callback not invoke
// if catch callback error happend, the after should catch error or be silent, itself will not catch
promise.catch(function(error) {
  console.log('oh no', error);
  //error happening...
})
.then(function() {
  console.log('carry on');
})
.catch(function () {

})

//****************************************************************
// Promise.all wrap many promise objects as one promise object

// generated Promise object array
var promises = [2, 3, 5, 7, 11, 13].map(function (id) {
  return getJSON("/post/" + id + ".json");
});

Promise.all(promises).then(function (posts) {
  // ...
}).catch(function(reason){
  // ...
});

// Promise.all, every promise object is fullfiled, and Promise.all
// callback will recieve promise object array as parameter
// or the first reject promise object as catch parameter

const databasePromise = connectDatabase();

const booksPromise = databaseProimse
  .then(findAllBooks);

const userPromise = databasePromise
  .then(getCurrentUser);

Promise.all([
  booksPromise,
  userPromise
])
.then(([books, user]) => pickTopRecommentations(books, user));

//****************************************************************
// Promise.race wrap many promise objects as one promise object
// the first promise object state changed will return as Promise.race object 

var p = Promise.race([
  fetch('/resource-that-may-take-a-while'),
  new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('request timeout')), 5000)
  })
])
p.then(response => console.log(response))
p.catch(error => console.log(error))

// 5 seconds, if fetch will not return, then "request timeout" error will return
// race is competition

//****************************************************************

// change into promise object

var jsPromise = Promise.resolve($.ajax('/whatever.json'));

Promise.resolve('foo');
// equals to 
new Promise(resolve => resolve('foo'));

var p = Promise.reject('出错了');
// equals to 
var p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s){
  console.log(s)
});
// 出错了

//****************************************************************

// use done() to catch any error that will happend and not catched

asyncFun()
    .then()
    .catch()
    .then()
    .done();

.done(resolved, rejected);

// two optional parameters

//****************************************************************
// finally will be executed all the time

asyncFun()
    .then()
    .finally(function() {})

//****************************************************************
// image loader


const preloadImage = function (path) {
  return new Promise( function (resolve, reject) {
    var image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = path;
  });
}

preloadImage('http://localhost:3000/images/1.png')
  .then(function() {
    // loaded image
  })
  .catch(function(){
    // error happened
  })
  .finally(function() {
    // execute all the times
  });

//****************************************************************

function getFoo () {
  return new Promise(function (resolve, reject){
    resolve('foo');
  });
}

var g = function* () {
  try {
    var foo = yield getFoo();
    console.log(foo);
  } catch (e) {
    console.log(e);
  }
};

function run (generator) {
  var it = generator();

  function go(result) {
    if (result.done) return result.value;

    return result.value.then(function (value) {
      return go(it.next(value));
    }, function (error) {
      return go(it.throw(error));
    });
  }

  go(it.next());
}

run(g);