var passport = require('../passport/index');   
var express = require('express');
var router = express.Router();


router.post('/login', (req, res, next) => {

    passport.authenticate('local-login', function(error, user, info){

        if(!user){
            return res.status(500).json({
                message: error || "Something went wrong..."
            });
        }

        req.logIn(user, function (error) {
            if(error){
                return res.status(500).json({
                    message: error || "Uh oh, something went wrong..."
                });
            }
        });

        return res.json({user, isAuthenticated : true});

    })(req, res, next);
});

router.post('/register', (req, res, next) => {

    passport.authenticate('local-register', function(error, user, info){

        if(!user) {
            return res.status(500).json({
                message: error || "something went wrong..."
            });
        }

        console.log(user);

        return res.json({
            message: "User is now authenticated"
        });
        
    })(req, res, next);
});

module.exports = router;