
exports.up = function(knex, Promise) {
    return knex.schema.createTable('review', (table)=>{
        table.increments();
        table.integer('rating');
        table.text('text');
        table.text("user_name")
      .references("user.name").onDelete("CASCADE");
        table.integer("recipe_id")
      .references("recipe.id").onDelete("CASCADE");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('review')
};
