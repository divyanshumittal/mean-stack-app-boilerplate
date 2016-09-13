var express = require('express');
var router = express.Router();
var passport = require('passport');
var moment = require('moment');

var User = require('../models/user.js');
var Location = require('../models/location.js');
var CandidateModel = require("../models/candidate.js");
var LogsModel  = require("../models/logs.js");


// REGISTER
router.post('/register', function (req, res) {
    User.register(new User({username: req.body.username, location: req.body.location, count: 0}),
        req.body.password, function (err, account) {
            if (err) {
                return res.status(500).json({
                    err: err
                });
            }
            passport.authenticate('local')(req, res, function () {
                return res.status(200).json({
                    status: 'Registration successful!'
                });
            });
        });
});

// LOGIN
router.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({
                err: info
            });
        }
        req.logIn(user, function (err) {
            if (err) {
                return res.status(500).json({
                    err: 'Could not log in user'
                });
            }
            res.status(200).json(
                {
                    user:user,
                    status: 'Login successful!'
                }
            );

            //update count of logged in user
            User.findOne({ username: user.username }, function (err, doc){
                doc.count = ++doc.count;
                doc.save();
            });

            //update count and users list in location
            Location.findOne({ location: user.location }, function (err, doc) {
                if (doc && doc.length != 0) {
                    doc.count = ++doc.count;
                    doc.users = doc.users.length == 0 ? user.username : doc.users + ',' + user.username;
                    doc.save();
                }
                else {
                    var locationEntry = new Location({
                        location: user.location,
                        users: user.username,
                        count: 1
                    });

                    locationEntry.save(function (err, location) {

                    });
                }
            });

            var dateInUTC = moment.utc();

            //store this entry in the logs
            var logEntry = new LogsModel({
                username: user.username,
                location: user.location,
                date: dateInUTC.format('MM/DD/YYYY'),
                time: dateInUTC.format('HH:mm A')
            });
            logEntry.save(function (err, candidate) {

            });
        });
    })(req, res, next);
});

// LOGOUT
router.get('/logout', function (req, res) {
    req.logout();
    res.status(200).json({
        status: 'Bye!'
    });
});

// GET STATUS
router.get('/status', function (req, res) {
    if (!req.isAuthenticated()) {
        return res.status(200).json({
            status: false
        });
    }
    res.status(200).json({
        status: true
    });
});

router.get('/', function (req, res) {
    res.sendfile('./public/index.html');
});

// GET ALL CANDIDATES
router.get('/candidate/all', function (req, res) {
    CandidateModel.find({}, function (err, docs) {
        if (!err) {
            console.log(docs);
            res.send({state: err ? 'error' : 'success', data: err ? err : docs});
        } else {
            throw err;
        }
    });
});

// POST CANDIDATE
router.post('/candidate', function (req, res) {

    var candidate = new CandidateModel(req.body);

    candidate.save(function (err, candidate) {

        if (err) {
            res.status(500);
        } else {
            res.status(201);
        }

        res.send({state: err ? 'error' : 'success', data: err ? err : candidate});
    });
});

// GET ALL CANDIDATES
router.get('/logs/all', function (req, res) {
    LogsModel.find({}, function (err, docs) {
        if (!err) {
            res.send({state: err ? 'error' : 'success', data: err ? err : docs});
        } else {
            throw err;
        }
    });
});

// GET ALL USERS
router.get('/users/all', function (req, res) {
    User.find({}, function (err, docs) {
        if (!err) {
            res.send({state: err ? 'error' : 'success', data: err ? err : docs});
        } else {
            throw err;
        }
    });
});

// GET ALL USERS SORTED BY COUNT
router.get('/users/all/sorted/count', function (req, res) {
    User.find({}, function (err, docs) {
        if (!err) {
            var rank = 1;

            if (docs.length >= 1) {
                docs[0].rank = rank;
            }

            for (var i=1; i< docs.length; i++) {
                if (docs[i].count < docs[i-1].count) {
                    rank = i + 1;
                }
                docs[i].rank = rank;
            }
            res.send({state: err ? 'error' : 'success', data: err ? err : docs});
        } else {
            throw err;
        }
    }).sort({'count':-1});
});

// GET ALL LOCATIONS SORTED BY COUNT
router.get('/locations/all/sorted/count', function (req, res) {
    Location.find({}, function (err, docs) {
        if (!err) {
            var rank = 1;

            if (docs.length >= 1) {
                docs[0].rank = rank;
            }

            for (var i=1; i< docs.length; i++) {
                if (docs[i].count < docs[i-1].count) {
                    rank = i + 1;
                }
                docs[i].rank = rank;
            }
            res.send({state: err ? 'error' : 'success', data: err ? err : docs});
        } else {
            throw err;
        }
    }).sort({'count':-1});
});

module.exports = router;
