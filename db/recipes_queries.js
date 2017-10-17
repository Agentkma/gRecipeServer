'use strict';
const knex = require('./knex'); //the connection


module.exports = {



    getAllRecipes(){

        function reformattedRecipe (recipes){

            const reformatted = [];
            //a place to look up recipe
            const recipeById = {};

            recipes.forEach(recipe=>{

                if (recipeById[recipe.id]  ){

                    function checkIfOrder  (array, item){
                        return array.some(n => n.order === item );
                    }

                    function checkIfIng(array, item){
                        return array.some(n => n.ingredientName === item );
                    }


                        if (!checkIfOrder(recipeById[recipe.id].step,recipe.order) ) {
                            recipeById[recipe.id].step.push(
                                {
                                order : recipe.order,
                                stepDescription : recipe.stepDescription,
                                }
                            );
                        }



                        if (!checkIfIng(recipeById[recipe.id].ingredient,recipe.ingredientName) ) {
                            // console.log(ingredient.ingredientName);
                            recipeById[recipe.id].ingredient.push(
                                {
                                    ingredientName :recipe.ingredientName,
                                    amount: recipe.amount,
                                    unit: recipe.unit,
                                }
                            );
                        }

                }

            // if recipes does not exist in reformatted
            else {
                    recipeById[recipe.id] = {
                    id : recipe.id,
                    title : recipe.title,
                    recipeDescription : recipe.recipeDescription,
                    file: recipe.file,
                    person_personName: recipe.person_personName,
                    step : [{
                        order : recipe.order,
                        stepDescription : recipe.stepDescription,
                    }],
                    ingredient:[ {
                        ingredientName :recipe.ingredientName,
                        amount: recipe.amount,
                        unit: recipe.unit,
                    }],

                }
               reformatted.push(recipeById[recipe.id]);
            }


            });
            return reformatted;
        }

        // get all recipe
        return knex('recipe').select('recipe.id',
        'title',
        'recipeDescription',
        'file',
        'person_personName',
        'ingredientName',
        'amount',
        'unit',
        'order',
        'stepDescription')
        .join('ingredient as ing','ing.recipe_id', "=",'recipe.id')
        .join('step as stp','stp.recipe_id', "=", 'recipe.id')
        .then(data =>{
        return reformattedRecipe(data);
        });
    },

    getRecipeById(id){
        return knex('recipe').where('id', id).first();
    },
    removeRecipe (id) {

        return knex('recipe')
            .where('id', id)
            .del();
    },

    updateRecipe (id, recipe) {
        return knex('recipe')
            .where('id', id)
            //make sure object from front end matches table keys
            .update(recipe, "*");
    },

    createRecipe (recipe) {

        /////// HELPER FUNCTIONS //////////////////////
        const addRecipe = ( data ) => {
            return knex( 'recipe' )
                .returning( 'id' )
                .insert( {
                    title: data.title,
                    recipeDescription: data.recipeDescription,
                    file: data.file,
                    person_personName: data.personName,
                } )
                .then( function ( id ) {
                        //TODO error invalid input syntax for integer: "{"17"}"....17 is incrementing id
                    console.log(id)

                    let steps = data.step;
                    // console.log(data);

                    let stepsPromises = steps.map( ( step ) => {

                        return knex( 'step' ).insert( {
                            order: step.order,
                            stepDescription: step.stepDescription,
                            recipe_id: id,
                        } );
                    } );
                    return Promise.all( stepsPromises );
                } );

        }

        const addPerson = ( data ) => {

            return knex( 'person' ).insert( {
                personName: data.personName
            } );
        };

        const addIngredient = ( data ) => {
            let ingredients = data.ingredient;
            let ingredientsPromises = ingredients.map( ( ingredient ) => {
                return knex( 'ingredient' ).insert( {
                    ingredientName: ingredient.ingredientName,
                    unit: data.unit,
                    amount: data.amount,
                } );
            } );
            return Promise.all( ingredientsPromises );
        }
        addRecipe( recipe );
        addPerson( recipe );
        addIngredient( recipe );
    }



}
