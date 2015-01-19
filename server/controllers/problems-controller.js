var Problem = require('../models/problems');
var util = require('util');

module.exports.create = function(req, res){
	var problem = new Problem(req.body);

	problem.save(function (err, result){
		res.json(result);
	});

}

module.exports.list = function(req, res) {
	Problem.find({}, function (err, results){
		res.json(results);
	});
}

module.exports.remove = function(req, res) {

	console.log(util.inspect(req.query, false, null));

	Problem.find({}, function (err, results) {
		for (i in results){

			if (results[i].id == req.query._id) {
				results[i].remove(function (err){
					if (!err) {
					    console.log("removed");
					} else {
					    console.log(err);
					}
				})
			};
		}
	});
}