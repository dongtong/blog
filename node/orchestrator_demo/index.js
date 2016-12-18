var Orchestrator = require('orchestrator');
var orchestrator = new Orchestrator();

orchestrator.add('task1', function(){
	setTimeout(function() {
		console.log('task1...')
	}, 4000)
});

orchestrator.add('task2', function(){
	setTimeout(function() {
		console.log('task2...')
	}, 3000)
});

orchestrator.add('task3', function(){
	setTimeout(function() {
		console.log('task3...')
	}, 6000)
});

orchestrator.add('task4', function(){
	setTimeout(function() {
		console.log('task4...')
	}, 1000)
});

//orchestrator.start(['task1','task2','task3','task4']);

// node v6.9.1
orchestrator.start(...['task1','task2','task3','task4'], function(err) {
	console.log(err)
});