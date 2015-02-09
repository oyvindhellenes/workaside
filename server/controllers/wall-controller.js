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

// exports.update = function(req, res) {

//   var wall = req.goal;
//   wall = _.extend(wall, req.body);

//   wall.save(function(err) {
//     if (err) {
//       return res.status(500).json({
//         error: 'Cannot update the wall'
//       });
//     }
//     res.json(wall);
//   });
// };
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