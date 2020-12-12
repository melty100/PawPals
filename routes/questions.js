var express = require('express');
var router = express.Router();
var db = require("../models");
const { Op } = require("sequelize");
var isAuthenticated = require("../config/middleware/isAuthenticated");

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

router.get('/userQuestions/:userId', function(req, res, next) {
    db.Question.findAll({where : {userId: req.params.userId}})
    .then((dbQuestion) => res.send(dbQuestion))
    .catch(err => res.status(422).json(err));
});

router.get('/:UserId', function(req, res, next) {
    db.Question.findOne({where : {UserId: req.params.UserId}})
    .then((dbQuestion) => res.send(dbQuestion))
    .catch(err => res.status(422).json(err));
});

router.get('/search/:query', function(req, res, next) {
    db.Question.findAll({
        where : {
            [Op.or]:[
            {question: {
                [Op.like]:  `%${req.params.query}%` 
            }},
            {content: {
                [Op.like]:  `%${req.params.query}%` 
            }}

        ]
        }
    })
    .then((dbQuestions) => res.send(dbQuestions))
    .catch(err => res.status(422).json(err));
})

router.get("/question/:id", function(req, res, next) {
    db.Question.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((dbQuestions) => res.send(dbQuestions))
    .catch((err) => {res.status(422).json(err);});
  });

module.exports = router;