var express = require('express'),
    swig = require('swig'),
    riot = require('riot'),
    helloWorld = require('./views/tags/hello-world.tag'),
    app = express();

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	var greetName = 'Riot.js';
	var content = riot.render(helloWorld, {name: greetName});
	res.render('index', {tag_content: content, greetName: greetName});
});

app.listen(3000, function () {
  console.log('server is listening 3000...');
});