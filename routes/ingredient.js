var express = require('express');
var router = express.Router();
var knex = require('../knex/knex');

/* GET ingredient listing. */
router.get('/', function(request, response, next) {
     knex('ingredient').then(ingredient =>{
        response.json(ingredient);

    });
});

module.exports = router;
