var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");


const RegisterStrategy = new LocalStrategy(
  {
    usernameField: "userName"
  },
  function(userName, password, done) {
 
    db.User.findOne({
        where: {
            userName: userName
        }
    }).then(function(dbUser) {

        if(dbUser){
            return done("Username is not available", false, {});
        }

        return done(null, dbUser);
    });
});


module.exports = RegisterStrategy;
