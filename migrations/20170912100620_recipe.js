
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe', (table)=>{
        table.increments();
        table.text('name');
        table.text('person_name')
      .references("person.name")
      .onDelete("CASCADE");
      table.text('description');
      table.text('image');
      table.integer('ingredient_id')
      .references('ingredient.id')
      .onDelete('CASCADE');
      table.integer('step_id')
      .references('step.id')
      .onDelete('CASCADE');

    });
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('recipe');
};
