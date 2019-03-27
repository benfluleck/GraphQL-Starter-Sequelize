'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hobbies = sequelize.define('Hobbies', {
    title: DataTypes.STRING
  }, {});
  Hobbies.associate = function(models) {
    Hobbies.belongsTo(models.Student, { 
      foreignKey: 'studentId' })
  };
  return Hobbies;
};