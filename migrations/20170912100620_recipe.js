
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe', (table)=>{
        table.increments();
        table.text('name');
        table.text("person_name")
      .references("person.name")
      .onDelete("CASCADE");

    });
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('recipe');
};
