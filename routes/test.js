var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/', function(req, res, next) {
    // res.send('respond with a resource');
     db.User.findAll({})
     .then((allUsers) => res.send(allUsers))
     .catch(err => res.status(422).end());

});

module.exports = router;