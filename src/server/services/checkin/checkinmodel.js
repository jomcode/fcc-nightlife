'use strict';
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const checkin = sequelize.define('checkin', {
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

  checkin.sync();
  // checkin.sync({ force: true }) // -- removes all database content

  return checkin;
};
