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

router.get('/getUserComments/:UserId', function(req, res, next) {
    db.Comment.findAll({where: {UserId : req.params.UserId}})
    .then((dbComments) => res.send(dbComments))
    .catch(err => {res.status(422).end()});
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