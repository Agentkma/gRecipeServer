var express = require('express');
var router = express.Router();
var knex = require('../knex/knex');

/* GET step listing. */
router.get('/', function(request, response, next) {
     knex('step').then(step =>{
        response.json(step);

    });
});

module.exports = router;
