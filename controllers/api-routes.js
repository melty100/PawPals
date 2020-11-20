var db = require("../models");
const { sequelize } = require("../models");


module.exports = function (app) {

  app.get("/testing", function(req, res) {

    db.User.findAll({})
    .then((users) => res.json(users));
  });
};