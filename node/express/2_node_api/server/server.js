var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

// 以下每一个请求都需要之前经过这些处理
// express.static会将client下的所有资源作为静态资源处理
// index.html作为默认路由'/'
app.use(express.static('client'));
// body-parser让客户端能够提交json数据到服务端
// 可以通过req.body获取客户端提交的数据
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// 模拟数据库表
var tasks = [];
var id = 0;

app.get('/tasks', function (req, res) {
	res.json(tasks);
});

app.get('/tasks/:id', function (req, res) {
	var task = _.find(tasks, {id: req.params.id});
	res.json(task || {});
});

app.post('/tasks', function (req, res) {
	var task = req.body;
	id++;
	task.id = id + '';

	tasks.push(task);

	res.json(task);
});

app.put('/tasks/:id', function (req, res) {
	var updateTask = req.body;
	if(updateTask.id) {
		// 不要修改数据库中的id
		delete updateTask.id;
	}

	var index = _.findIndex(tasks, {id: req.params.id});
	if(!tasks[index]) {
		//未找到
		res.send();
	} else {
		var updatedTask = _.assign(tasks[index], updateTask);
		res.json(updatedTask);
	}
}); 

app.delete('/tasks/:id', function (req, res) {
	var index = _.findIndex(tasks, {id: req.params.id});
	if(!tasks[index]) {
		res.send();
	} else {
		var deleteTask = tasks[index];
		tasks.splice(index, 1);
		res.json(deleteTask);
	}
});

app.listen(3000, function () {
	console.log('server is listening 3000...');
})