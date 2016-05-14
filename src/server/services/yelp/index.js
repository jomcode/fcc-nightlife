'use strict';
const yelp = require('../../config/yelp').yelp;
const hooks = require('./hooks');

const formatBusiness = require('../../utilities/formatbusiness');

class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
    return yelp.search({
      location: params.query.location || '',
      'category_filter': 'bars'
    })
    .then(resp => resp.businesses)
    .then(businesses => businesses.map(b => formatBusiness(b)))
    .then(data => ({ data }));
  }

  get(id, params) {
    return yelp.business(id)
    .then(business => formatBusiness(business))
    .then(data => ({ data }));
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
