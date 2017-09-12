var express = require('express');
var router = express.Router();
var knex = require('../knex/knex');

/* GET user listing. */
router.get('/', function(request, response, next) {
     knex('user').then(user =>{
        response.json(user);

    });
});

module.exports = router;
