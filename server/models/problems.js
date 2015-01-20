var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var problemSchema = new Schema({
	name: String,
	userid: String 
});

module.exports = mongoose.model('Problem', problemSchema);
