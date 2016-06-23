var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET books listing. */
router.get('/', function(req, res, next) {
	models.Book.findAll({
		attributes: ['id', 'title', 'author']
	}).then(function(data) {
		res.json(data);
	});
});

/* POST create a book. */
router.post('/', function(req, res) {
	models.Book.create({
		title: req.body.title,
		author: req.body.author
	}).then(function() {
		res.json({
			status: '0'
		})
	});
});

module.exports = router;
