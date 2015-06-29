var express = require('express');
var passport = require('passport');
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
 * Home page
 */
router.get('/', function (req, res, next) {
    res.redirect('login');
});

/**
 * Login page
 */
router.get('/login', function (req, res, next) {
    res.render('login', {message: req.flash('loginMessage')});
});

// process the login form
router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/lobby', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));

/**
 * Logout page
 */
router.get('/logout', function (req, res, next) {
    //req.logout();
    res.redirect('/');
});

/**
 * Sign up page
 */
router.get('/signup', function (req, res, next) {
    res.render('signup', {message: req.flash('signupMessage')});
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/lobby', // redirect to the secure profile section
    failureRedirect: '/signup', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));

/**
 * Lobby page
 */
router.get('/lobby', isLoggedIn, function (req, res) {
    res.render('lobby', {
        user: req.user // get the user out of session and pass to template
    });
});

module.exports = router;


