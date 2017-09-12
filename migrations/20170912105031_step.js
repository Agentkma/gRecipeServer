
exports.up = function(knex, Promise) {
    return knex.schema.createTable('step', (table)=>{
        table.increments();
        table.integer('order');
        table.text('description');
        table.integer("recipe_id")
      .references("recipe.id").onDelete("CASCADE");

    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('step')
};
