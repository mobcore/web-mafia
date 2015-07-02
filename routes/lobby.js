var express = require('express');
var router = express.Router();

/**
 * Middleware
 */
// route middleware to make sure a user is logged in
var isLoggedIn = function (req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

/**
 * Lobby page
 */
router.get('/lobby', isLoggedIn, function (req, res) {
    res.render('lobby', {
        user: req.user // get the user out of session and pass to template
    });
});

module.exports = router;
