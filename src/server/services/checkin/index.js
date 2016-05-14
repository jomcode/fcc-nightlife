'use strict';
const service = require('feathers-sequelize');
const checkIn = require('./checkinmodel');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: checkIn(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  app.use('/checkins', service(options));

  const checkInService = app.service('/checkins');

  checkInService.before(hooks.before);
  checkInService.after(hooks.after);
};
