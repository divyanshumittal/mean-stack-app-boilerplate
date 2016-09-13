// user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Location = new Schema({
  location: String,
  users: String,
  count: Number, default: 0,
  rank: Number, default: 0
});

module.exports = mongoose.model('Location', Location);
