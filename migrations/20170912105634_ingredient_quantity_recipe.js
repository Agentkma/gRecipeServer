
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredient_quantity_recipe', (table)=>{
        table.increments();
        table.integer("ingredient_id")
      .references("ingredient.id");
        table.integer("quantity_id")
      .references("quantity.id");
        table.integer("recipe_id")
      .references("recipe.id");
    //   .onDelete("CASCADE");


    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredient_quantity_recipe')
};
