'use strict';
module.exports = (sequelize, DataTypes) => {
  var Gender = sequelize.define('Gender', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    timestamps: false,
    freezeTableName: true,
    tableName: 'genders'
  });
  return Gender;
};