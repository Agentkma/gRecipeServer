var express = require('express');
var router = express.Router();
var knex = require('../knex/knex');

/* GET review listing. */
router.get('/', function(request, response, next) {
     knex('review').then(review =>{
        response.json(review);

    });
});

module.exports = router;
