var express = require('express');
var router = express.Router();
var db = require("../models");
const { Sequelize } = require('../models');

router.get('/getAll', function(req, res, next) {
    // res.send('respond with a resource');
    db.Comment.findAll({})
    .then((dbComment) => res.send(dbComment))
    .catch(err => res.status(422).end());

});

router.get('/getByQuestion/:id', function(req, res, next) {
    db.comment.findAll({where: {QuestionId : req.params.QuestionId}})
    then((dbComments) => res.send(dbComment))
    .catch(err => {res.status(422).end()});
});

router.post('/postComment', async function(req, res, next) {
    // res.send('respond with a resource');
    db.Comment.create({
        comment: req.body.comment,
        QuestionId: req.body.QuestionId,
        UserId: req.body.UserId,
        parentCommentId : req.body.UserId
    })
    .then((dbResponse) => { res.send("Comment posted!")})
    .catch((err) => {res.status(422).json(err);});
});

router.post('/liked/:id', async function(req, res, next) {

    db.comment.update({likes : Sequelize.literal('likes + 1')}, {where : {id : req.params.id}})
    .then(() => res.send("comment liked!"))
    .catch(err => res.status(422).end());
});

router.post('/disliked/:id', async function(req, res, next) {

    db.comment.update({dislikes : Sequelize.literal('dislikes + 1')}, {where : {id : req.params.id}})
    .then(() => res.send("comment liked!"))
    .catch(err => res.status(422).end());
});

module.exports = router;