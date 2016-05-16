'use strict';
const Sequelize = require('sequelize');

const authentication = require('./authentication');
const user = require('./user');
const yelp = require('./yelp');
const checkin = require('./checkin');

module.exports = function() {
  const app = this;

  const sequelize = new Sequelize(app.get('postgres'), {
    dialect: 'postgres',
    logging: false
  });

  app.set('sequelize', sequelize);

  app.configure(authentication);
  app.configure(user);
  app.configure(yelp);
  app.configure(checkin);

  /* Set up relationships between models */
  const models = sequelize.models;
  Object.keys(models)
    .map(name => models[name])
    .filter(model => model.associate)
    .forEach(model => model.associate(models));

  sequelize.sync();
  // sequelize.sync({ force: true });
};
