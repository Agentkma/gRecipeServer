var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];
var knex = require('knex')(config);



knex.schema.createTable('quantity', function (table) {
  table.increments();
  table.string('unit');
  table.integer();
})

module.exports = knex;
