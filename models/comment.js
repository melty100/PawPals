
module.exports = function(sequelize, DataTypes) {
    const Comments = sequelize.define("Comment", {
  
      comment: {
        type: DataTypes.STRING,
        allowNull: false
      },

      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },

      dislikes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
  
    });
  
    return Comments;
  };