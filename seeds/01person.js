'use strict';
const person = require('../seed_data/person');


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('person').del()
    .then(function () {
      // Inserts seed entries
      return knex('person').insert(person);
    });
};
