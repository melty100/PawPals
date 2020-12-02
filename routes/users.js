var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/getAll', function(req, res, next) {
    // res.send('respond with a resource');
     db.User.findAll({})
     .then((allUsers) => res.send(allUsers))
     .catch(err => res.status(422).end());

});

router.post('/postUser', function(req, res, next) {
    db.User.create({
        email: req.body.email,
        password: req.body.password,
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        petBio: req.body.petBio
    })
    .then((dbResponse) => {res.send("User Posted!")})
    .catch((err) => res.send(422).json(err));
})

module.exports = router;