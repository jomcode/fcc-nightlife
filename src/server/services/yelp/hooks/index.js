'use strict';
// const globalHooks = require('../../../hooks');
// const hooks = require('feathers-hooks');

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

const populateCheckins = hook => {
  const checkinService = hook.app.service('checkin');

  const barIds = hook.result.data.map(b => b.id);

  const checkinPromises = barIds.map(id => {
    return new Promise((resolve, reject) => {
      resolve(checkinService.find({ query: { barId: id } }));
    });
  });

  return Promise.all(checkinPromises)
    .then(results => {
      return hook.result.data.map((b, i) => {
        return Object.assign({}, b, {
          checkins: results[i].data.slice(0)
        });
      });
    })
    .then(d => {
      hook.result.data = d;
      return hook;
    });
};

exports.after = {
  all: [],
  find: [populateCheckins],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
