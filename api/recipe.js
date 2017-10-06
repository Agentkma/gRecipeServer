'use strict';
const express = require( 'express' );
const router = express.Router();
const queries = require( '../db/recipes_queries' );


//Route : get all recipes
router.get('/', (request, response)=>{
    
    queries.getAllRecipes().then( recipe =>{
        response.json(recipe);
    });
});


module.exports = router;
