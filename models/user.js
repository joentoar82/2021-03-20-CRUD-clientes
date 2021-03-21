
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    keyCode: Number,
    country: String,
    city: String,
    email: String,
    contact: Number,
    request: String

});

module.exports = mongoose.model('User', userSchema);

