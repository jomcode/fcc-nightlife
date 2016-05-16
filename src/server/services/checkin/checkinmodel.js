'use strict';
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const checkin = sequelize.define('checkin', {
    barId: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate(models) {
        checkin.belongsTo(models.user,
          {
            foreignKey: { allowNull: false },
            onDelete: 'CASCADE'
          }
        );
      }
    },
    freezeTableName: true
  });

  return checkin;
};
