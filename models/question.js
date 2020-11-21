
module.exports = function(sequelize, DataTypes) {
  const Question = sequelize.define("Question", {

    question: {
      type: DataTypes.STRING,
      allowNull: false
    },

    topic: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Question;
};