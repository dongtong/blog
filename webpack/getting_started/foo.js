var $ = require('jquery');
// var css = require('css!./foo.css');
// console.log(css)
var fooStyle = require('./foo.css');
console.log(fooStyle)
module.exports = $('<div/>').html("hello foobar");
