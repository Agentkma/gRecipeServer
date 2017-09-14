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

router.post('/createReview', function(request, response, next) {
        console.log('test');
        response.json(request.json());

        // need to loop through request arrays to test for table type match and  then knex to appropriate table

        //
        // knex('review').insert({
        //          rating: request.body.,
        //          text: "I love this pepperoni pizza recipe!  It's super simple and easy to follow",
        //          user_id: 1,
        //          recipe_id: 1,
        //      })

});
 // knex('review').insert(
 //     {
 //          rating: request.body.,
 //          text: "I love this pepperoni pizza recipe!  It's super simple and easy to follow",
 //          user_id: 1,
 //          recipe_id: 1,
 //      }
 // );

    // .then(review =>{
    //
    //     return knex('review').insert([
    //       {
    //       rating: 4,
    //       text: "I love this pepperoni pizza recipe!  It's super simple and easy to follow",
    //       user_id: 1,
    //       recipe_id: 1,
    //   },
    //     ]);
    //
    //
    //     response.json(review);
    //
    // });



module.exports = router;
