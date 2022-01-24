'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      // review.belongsTo(models.user,{ foreignKey: 'user_id', targetKey: 'id' });
      // models.user.hasMany(review,{ foreignKey: 'user_id', sourceKey: 'id' });
      // review.belongsTo(models.item,{ foreignKey: 'item_id', targetKey: 'id' });
      // models.item.hasMany(review,{ foreignKey: 'item_id', sourceKey: 'id' });
    }
  }
  review.init({
    userId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'review'
  });
  return review;
};
