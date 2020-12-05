var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/getAll', function(req, res, next) {
    // res.send('respond with a resource');
    db.Question.findAll({})
    .then((dbQuestions) => res.send(dbQuestions))
    .catch(err => res.status(422).end());

});

router.get("/question/:id", function(req, res, next) {
    db.Question.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((dbQuestions) => res.send(dbQuestions))
    .catch((err) => {res.status(422).json(err);});
  });

router.post('/postQuestion', async function(req, res, next) {
    // res.send('respond with a resource');
    db.Question.create(
        {
            question: req.body.question,
            topic: req.body.topic,
            content: req.body.content,
            UserId: req.body.userId
        })
    .then((dbResponse) => { res.send("Question posted!")})
    .catch((err) => {res.status(422).json(err);});
});

module.exports = router;