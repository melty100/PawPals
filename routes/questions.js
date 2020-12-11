var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/getAll', function(req, res, next) {
    // res.send('respond with a resource');
    db.Question.findAll({})
    .then((dbQuestions) => res.send(dbQuestions))
    .catch(err => res.status(422).json(err));
});

router.get('/:id', function(req, res, next) {
    db.Question.findOne({where : {id : req.params.id}})
    .then((dbQuestion) => res.send(dbQuestion))
    .catch(err => res.status(422).json(err));
});

router.get('/:question', function(req, res, next) {
    db.Question.findAll({where : {question: req.params.question}})
    .then((dbQuestion) => res.send(dbQuestion))
    .catch(err => res.status(422).json(err));
});

router.get('/topic/:topic', function(req, res, next) {
    db.Question.findAll({where : {topic: req.params.topic}})
    .then((dbQuestion) => res.send(dbQuestion))
    .catch(err => res.status(422).json(err));
});

router.get('/:UserId', function(req, res, next) {
    db.Question.find({where : {UserId: req.params.UserId}})
    .then((dbQuestion) => res.send(dbQuestion))
    .catch(err => res.status(422).json(err));
});


router.post('/postQuestion', async function(req, res, next) {
    // res.send('respond with a resource');
    db.Question.create({
        question: req.body.question,
        topic: req.body.topic,
        content: req.body.content,
        UserId: req.body.UserId
    })
    .then((dbResponse) => { res.send("Question posted!")})
    .catch((err) => res.status(422).json(err));
});

module.exports = router;