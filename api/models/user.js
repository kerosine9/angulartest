// Dependencies

var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
	email: String,
	password: String
});


// Return model
module.exports = restful.model('Users', userSchema);