'use strict';
const step = require('../seed_data/step');


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('step').del()
    .then(function () {
      // Inserts seed entries
      return knex('step').insert(step);
    });
};
