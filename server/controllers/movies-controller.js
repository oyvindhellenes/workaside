var Movie = require('../models/movies');

module.exports.create = function(req, res){
	var movie = new Movie(req.body);

	movie.save();

}

module.exports.list = function(req, res) {
	Movie.find({}, function (err, results){
		res.json(results);
	});
}