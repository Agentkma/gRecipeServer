var database = require('./knex/knex');
//find out the ingredients that a user has used
    //if looking for specific user you can use .aware()
database('user')
    .select('ingredient.name as ingredient', 'user.name')
    .join("review", "user.id", "review.user_id")
    .join("recipe", "recipe.id", "review.recipe_id")
    .join('ingredient_recipe', 'recipe.id', 'recipe_id')
    .join('ingredient', 'ingredient.id', 'recipe_ingredient_id')
    .then((data)=>{
        let users = {};
        data.forEach( (row)=>{
            //use map to find unique items in array
            //js to process data

        });

        //then response.json


     });
