// candidate model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Candidate = new Schema(
    {
        name: String,
        clientName: String,
        payRate: Number,
        startDate: String,
        sixMonthDate: String,    
        isSixMonthsOrMore: String,
        billRate: Number,
        phone: Number,
        recruiterEmail: String,
        location: String
    }
);

module.exports =  mongoose.model("Candidate", Candidate);
