
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredient_quantity_step', (table)=>{
        table.increments();
        table.integer("ingredient_id")
      .references("ingredient.id").onDelete("CASCADE");
        table.integer("quantity_id")
      .references("quantity.id").onDelete("CASCADE");
        table.integer("step_id")
      .references("step.id").onDelete("CASCADE");


    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredient_quantity_step')
};
