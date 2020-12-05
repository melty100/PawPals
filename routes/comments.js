var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/getAll', function(req, res, next) {
    // res.send('respond with a resource');
    db.Comment.findAll({})
    .then((dbComment) => res.send(dbComment))
    .catch(err => res.status(422).end());

});

router.post('/postComment', async function(req, res, next) {
    // res.send('respond with a resource');
    db.Comment.create({comment: req.body.comment})
    .then((dbResponse) => { res.send("Comment posted!")})
    .catch((err) => {res.status(422).json(err);});
});

module.exports = router;