'use strict';
const express = require( 'express' );
const router = express.Router();
const queries = require( '../db/recipes_queries' );

// validate ID
function isValidId(request, response, next) {
    if (!isNaN(request.params.id)) return next();
    next(new Error('Invalid ID'));
}
// validate Recipe
function validRecipe(recipe) {
  // IS THE TITLE A STRING? AND DOES IT HAVE A VALUE INSIDE?
  const hasTitle = typeof recipe.title == "string" && recipe.title.trim() != "";

  const hasRecipeDescription = typeof recipe.recipeDescription == "string" && recipe.recipeDescription.trim() != "";

  const hasUrl = typeof recipe.file == "string" && recipe.file.trim() != "";

  const hasName = typeof recipe.personName == "string" && recipe.personName.trim() != "";

  const hasingredientName = typeof recipe.ingredient[0].ingredientName == "string" && recipe.ingredient[0].ingredientName.trim() != "";

  const hasingredientUnit = typeof recipe.ingredient[0].unit == "string" && recipe.ingredient[0].unit.trim() != "";

   const hasingredientAmount = typeof recipe.ingredient[0].amount == "string" && recipe.ingredient[0].amount.trim() != "";

   const hasStep = typeof recipe.step[0].order == "string" && recipe.step.order.trim() != "";

   const hasstepDescription = typeof recipe.step[0].stepDescription == "string" && recipe.step[0].stepDescription.trim() != "";

 // RETURN THE VALUES OF EACH VARIABLE
  return hasTitle && hasRecipeDescription && hasUrl && hasName && hasingredientName && hasingredientUnit && hasingredientAmount && hasStep && hasstepDescription;
}

function read (request, response){
    queries.getAllRecipes().then( recipe =>{
        response.json(recipe);
    });
}

function readId (request,response){
    queries.getRecipeById(request.params.id).then( recipe =>{
        if(recipe) {
            response.json(recipe);
        }
        else {
            next();
        }
    })
}

function post( request, response, next ) {
    
    queries.createRecipe(request.body).then(()=>{

        response.json( 'Recipe Added!' );
    });
        // if(validRecipe(request.body)) {
        //
        //     queries.createRecipe(request.body).then(()=>{
        //
        //         response.json( 'Recipe Added!' );
        //     });
        // }
        //
        // else {
        //     next(new Error ('Invalid Recipe'));
        // }

}

function remove (request, response, next) {
    queries.removeRecipe(request.params.id)
            .then(()=>{
                response.json('Recipe Deleted');
            });
        }

function put (request, response, next) {
    if(validRecipe(request.body)){

        queries.updateRecipe(request.params.id, request.body)
                        .then(()=>{
                            response.json('Recipe Updated')
                        });
        }else {
            next( new Error('Invalid Recipe Update'));
    }
}




//Route : get all recipes
router.get('/', read);

// Route : get recipe by id
router.get('/:id', isValidId, readId);

//Route : add recipe
router.post('/', post);


// Update RECIPE
router.put('/:id', put );

// DELETE A RECIPE
router.delete('/:id', remove );



module.exports = router;
