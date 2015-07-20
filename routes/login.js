var express = require('express');
var passport = require('passport');
var router = express.Router();

/**
 * Home page
 */
router.get('/', function (req, res, next) {
    res.redirect('login');
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
    req.logout();
   // req.session.destroy();
    res.redirect('/');
});

module.exports = router;
