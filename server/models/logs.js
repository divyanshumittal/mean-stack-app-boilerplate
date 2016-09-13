// logs model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Logs = new Schema({
    username: String,
    location: String,
    date: String,
    time: String,
    userRank: Number, default: 0,
    locationRank: Number, default: 0
});

module.exports = mongoose.model('logs', Logs);
