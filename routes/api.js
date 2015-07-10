var express = require('express');
var router = express.Router();
var User = require('../models/user');

/*
 * GET userlist.
 */
router.get('/userlist', function (req, res) {
    User.find(function (err, users) {
        console.log(users);
        res.json(users);
    });
});

module.exports = router;