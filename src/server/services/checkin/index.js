'use strict';
const service = require('feathers-sequelize');
const checkin = require('./checkinmodel');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: checkin(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  app.use('/checkin', service(options));

  const checkinService = app.service('/checkin');

  checkinService.before(hooks.before);
  checkinService.after(hooks.after);
};
