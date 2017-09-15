var express = require('express');
var router = express.Router();
var knex = require('../knex/knex');

/* GET recipe listing. */
router.get('/', function(request, response, next) {
     knex('recipe').then(recipe =>{
        response.json(recipe);

    });
});

// POST new RECIPE
router.post('/createRecipe', function(request, response, next) {

        let data = request.body;

        return knex('person').insert({
            name: data.user_name
        })
        .then(()=>{
            return knex('step').insert({
                     rating: data.rating,
                     text: data.text,
                     person_name: data.user_name,
                     recipe_id: data.recipe_id,
                 });
        })
        .then(()=>{
            return knex('ingredient').insert({
                     rating: data.rating,
                     text: data.text,
                     person_name: data.user_name,
                     recipe_id: data.recipe_id,
                 });
        })
        .then(()=>{
            return knex('quantity').insert({
                     rating: data.rating,
                     text: data.text,
                     person_name: data.user_name,
                     recipe_id: data.recipe_id,
                 });
        })
        .then( ()=>{
            response.json('Review Submited');
        });
});



module.exports = router;
