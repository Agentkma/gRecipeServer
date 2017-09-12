var express = require('express');
var router = express.Router();
var knex = require('../knex/knex');

/* GET quantity listing. */
router.get('/', function(request, response, next) {
     knex('quantity').then(quantity =>{
        response.json(quantity);

    });
});

module.exports = router;
