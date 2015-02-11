var Wall = require('../models/wall');

module.exports.create = function(req, res){
	var wall = new Wall(req.body);

	wall.save(function (err, result){
		res.json(result);

	});

}

module.exports.get = function(req, res) {

	Wall.find({}, function (err, results){
		res.json(results);
	});

}

module.exports.getById = function(req, res) {

	Wall.find({_id: req.params.id}, function (err, results){
		res.json(results);
	});
	
}

module.exports.update = function(req, res) {
	
	Wall.update({_id: req.params.id}, req.body, { multi: true }, function(err, results){
		res.json(results);
	});
};

module.exports.remove = function(req, res) {

	Wall.find({}, function (err, results) {
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