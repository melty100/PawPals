var express = require('express');
var router = express.Router();
var db = require("../models");
const { Sequelize } = require('../models');

router.get('/getAll', function(req, res, next) {
    // res.send('respond with a resource');
    db.Comment.findAll({})
    .then((dbComments) => res.send(dbComments))
    .catch(err => res.status(422).end());

});

router.get('/getByQuestion/:id', function(req, res, next) {
    db.Comment.findAll({where: {QuestionId : req.params.id}})
    .then((dbComments) => res.send(dbComments))
    .catch(err => {res.status(422).end()});
}); 

router.post('/postComment', function(req, res, next) {
    // res.send('respond with a resource');
    db.Comment.create({
        comment: req.body.comment,
        QuestionId: req.body.QuestionId,
        UserId: req.body.UserId,
        parentCommentId : req.body.parentCommentId
    })
    .then((dbResponse) => { res.send("Comment posted!")})
    .catch((err) => {res.status(422).json(err);});
});

router.post('/liked/:id', function(req, res, next) {

    db.Comment.update({likes : Sequelize.literal('likes + 1')}, {where : {id : req.params.id}})
    .then(() => res.send("comment liked!"))
    .catch(err => res.status(422).end());
});

router.post('/disliked/:id', function(req, res, next) {

    db.Comment.update({likes : Sequelize.literal('likes - 1')}, {where : {id : req.params.id}})
    .then(() => res.send("comment disliked :("))
    .catch(err => res.status(422).end());
});

module.exports = router;