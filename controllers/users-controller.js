const router = require('express').Router();
const passport = require('passport');

const auth = require('../services/auth');

// Sign up page.

router.get('/new', (req, res) => {
  res.render('users/new');
});

// Post to create new user (params are username/password).

router.post('/',
  passport.authenticate(
    'local-signup', {
        failureRedirect: '/users/new',
        successRedirect: '/quotes/index'
    }
  )
);

// Post to login (params are username/password).

router.post('/login',
  passport.authenticate(
    'local-login', {
        failureRedirect: '/',
        successRedirect: '/quotes/index'
    }
));

// Logout.

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
