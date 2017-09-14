var express = require('express');
var router = express.Router();
var knex = require('../knex/knex');

/* GET review listing. */
router.get('/', function(request, response, next) {
     knex('review').then(review =>{
        response.json(review);

    });

});

// POST new review

router.get('/createReview', function(request, response, next) {
        console.log('test');
        let hello = 'hello world';
        response.json(hello);

        // need to loop through request arrays to test for table type match and  then knex to appropriate table

        //
        // knex('review').insert({
        //          rating: request.body.,
        //          text: "I love this pepperoni pizza recipe!  It's super simple and easy to follow",
        //          user_id: 1,
        //          recipe_id: 1,
        //      })

});






module.exports = router;
