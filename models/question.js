
module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("Question", {

    question: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });

  return Question;
};