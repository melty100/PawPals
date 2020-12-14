const passport = require('passport');

const LoginStrategy = require('./LoginStrategy');
const RegisterStrategy = require('./RegisterStrategy');

passport.use('local-login', LoginStrategy);
passport.use('local-register', RegisterStrategy);

passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  
  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });

module.exports = passport;