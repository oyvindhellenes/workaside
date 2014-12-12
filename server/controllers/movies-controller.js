var Movie = require('../models/movies');

module.exports.create = function(req, res){
	var movie = new Movie(req.body);

	movie.save(function (err, result){
		res.json(result);
	});

}

module.exports.list = function(req, res) {
	Movie.find({}, function (err, results){
		res.json(results);
	});
}

module.exports.remove = function(req, res) {
	Movie.find({}, function (req, results) {
		console.log('res' + res.id);
		for (i in results){
			console.log('results' + results[i].id);
			if (results[i].id == '548b4e3ea16707861e016ac1') {
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