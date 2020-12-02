var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/getAll', function(req, res, next) {
    // res.send('respond with a resource');
    db.Question.findAll({})
    .then((dbQuestions) => res.send(dbQuestions))
    .catch(err => res.status(422).end());

});

router.post('/postQuestion', async function(req, res, next) {
    // res.send('respond with a resource');
    const q = await db.Question.create({question: req.body.question, UserId: req.body.userId});
});

module.exports = router;