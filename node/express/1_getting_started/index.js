var express = require('express');
var app = express();
var fs = require('fs');

var data = {
	name: 'foobar',
	age: 30
};

app.get('/', function (req, res) {
	// Method 1:
	// res.sendFile need absolute file path
	// set the mime type based on the file extname
	res.sendFile(__dirname + '/index.html', function (err) {
		if(err) {
			res.status(500).send(err);	
		}
	}); 

	// Method 2:
	// wait until index.html content loaded
	// fs.readFile('index.html', function (err, buffer) {
	// 	var htmlTxt = buffer.toString();
	// 	res.setHeader('Content-Type', 'text/html');
	// 	res.send(htmlTxt);
	// });
});

app.get('/data', function (req, res) {
	res.json(data);
});

app.listen(3000, function () {
	console.log('server is starting at 3000...');
});