const express = require('express');
const router = express.Router();
const env = 'development';
const knex = 'knex';
const config = require('../knexfile.js')[env];
// const sql = knex('gRecipes').toString();
// console.log(sql);

// knex.destroy();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
