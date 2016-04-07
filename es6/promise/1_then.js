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