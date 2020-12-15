var express = require('express');
var router = express.Router();
var db = require("../models");
const { Sequelize } = require('../models');

router.use(function(req, res, next) {
    if(!req.user) {
        res.json({});
    }
    else {
        return next();
    }
});

router.post('/postQuestion', function(req, res, next) {
    // res.send('respond with a resource');

    db.Question.create({
        question: req.body.question,
        topic: req.body.topic,
        content: req.body.content,
        UserId: req.user[0].dataValues.id
    })
    .then((dbResponse) => res.json("question posted"))
    .catch((err) => res.status(422).json(err));
});

router.post('/postComment', function(req, res, next) {
    // res.send('respond with a resource');
    db.Comment.create({
        comment: req.body.comment,
        QuestionId: req.body.QuestionId,
        UserId: req.user.id,
        parentCommentId : req.body.parentCommentId
    })
    .then((dbResponse) => { res.send("Comment posted!")})
    .catch((err) => {res.status(422).json(err);});
});

module.exports = router;