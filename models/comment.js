
module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
  
      comment: {
        type: DataTypes.STRING,
        allowNull: false
      },
  
      userId: {
          type: DataTypes.NUMBER,
          allowNull: false
      },

      questionId: {
          type: DataTypes.NUMBER,
          allowNull: false
      },

      nestedCommentId: {
          type: DataTypes.NUMBER,
          allowNull: true
      }
  
    });
  
    return Comment;
  };