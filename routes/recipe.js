var express = require('express');
var router = express.Router();
var knex = require('../knex/knex');

/* GET recipe listing. */
router.get('/', function(request, response, next) {
     knex('recipe').then(recipe =>{
        response.json(recipe);

    });
});

module.exports = router;
