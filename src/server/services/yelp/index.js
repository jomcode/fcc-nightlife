'use strict';
const yelp = require('../../config/yelp').yelp;
const hooks = require('./hooks');

class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
    return yelp.search({
      location: params.query.location || '',
      'category_filter': 'bars'
    });
  }

  get(id, params) {
    return yelp.business(id);
  }

  create(data, params) {}

  update(id, data, params) {}

  patch(id, data, params) {}

  remove(id, params) {}
}

module.exports = function() {
  const app = this;

  app.use('/yelp', new Service());

  const yelpService = app.service('/yelp');

  yelpService.before(hooks.before);
  yelpService.after(hooks.after);
};

module.exports.Service = Service;
