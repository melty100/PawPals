const passport = require('passport');
const db = require('../models');

passport.serializeUser(function(user, done) {
    done(null, user.userName);
  });
  
passport.deserializeUser(function (userName, done) {

  db.User.findAll({where : {userName: userName}})
  .then(user => {
    done(null, user);
  }).catch(err => {
    done(err, null);
  });
});

const LoginStrategy = require('./LoginStrategy');
const RegisterStrategy = require('./RegisterStrategy');

passport.use('local-login', LoginStrategy);
passport.use('local-register', RegisterStrategy);


module.exports = passport;