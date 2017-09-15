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

        let data = request.body;
        console.log(data);

        return knex('person').insert({
            name: data.user_name
        })
        .then(()=>{
            return knex('review').insert({
                     rating: data.rating,
                     text: data.text,
                     person_name: data.user_name,
                     recipe_id: data.recipe_id,
                 });
                 console.log('test review insert');
        })
        .then( ()=>{
            response.redirect('https://grecipes-2be24.firebaseapp.com/');
        });


});






module.exports = router;
