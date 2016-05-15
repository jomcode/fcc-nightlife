'use strict';
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const checkIn = sequelize.define('checkIn', {
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    barId: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true
  });

  checkIn.sync();
  // checkIn.sync({ force: true }) // -- removes all database content

  return checkIn;
};
