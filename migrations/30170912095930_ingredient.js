
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredient', (table)=>{
      table.increments();
      table.text('ingredientName');
      table.text('unit');
      table.integer('amount');
      table.integer("recipe_id")
      .references("recipe.id").onDelete("CASCADE");

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredient');

};
