var express = require('express');
var router = express.Router();
var knex = require('../knex/knex');

/* GET ingredient_quantity_recipe listing. */
router.get('/', function(request, response, next) {
     knex('ingredient_quantity_recipe').then(ingredient_quantity_recipe =>{
        response.json(ingredient_quantity_recipe);

    });
});

module.exports = router;
