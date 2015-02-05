var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var wallSchema = new Schema({
	id: String,
	name: String,
	what: String,
	why: String,
	whom: String,
	links: [
		{
			name: String,
			url: String
		}
	],
	ioth: [
		{
			name: String,
			imageUrl: String,
			qoute: String
		}

	],
	gotw: [
		{
			task: String
		}
	]
});

module.exports = mongoose.model('Wall', wallSchema);
