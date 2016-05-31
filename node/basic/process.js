// API
// https://nodejs.org/api/process.html
// node process.js
// node process.js --user foobar --greeting "hello foobar"
console.log(process.argv)

function fetch(arg) {
	var index = process.argv.indexOf(arg);
	return index === -1 ? null : process.argv[index+1];
}

var user = fetch('--user');
var greeting = fetch('--greeting');
if(!user || !greeting) {
	console.log("found nothing");
} else {
	console.log(`Welcome ${user}, and ${greeting}`);
}
