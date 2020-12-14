var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");


const LoginStrategy = new LocalStrategy(

  {
    usernameField: "userName"
  },
  function(userName, password, done) {
 
    db.User.findOne({
      where: {
        userName: userName
      }
    }).then(function(dbUser) {

      if (!dbUser) {
        return done("No user found", false, {});
      }

      else if (!dbUser.validPassword(password)) {
        return done("Username or password not valid", false, {});
      }

      return done(null, dbUser);
    });
});


module.exports = LoginStrategy;
