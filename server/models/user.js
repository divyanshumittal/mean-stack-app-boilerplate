// user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var User = new Schema({
  username: String,
  password: String,
  location: String,
  count: Number, default: 0,
  rank: Number, default: 0
});

User.plugin(passportLocalMongoose);


module.exports = mongoose.model('users', User);
