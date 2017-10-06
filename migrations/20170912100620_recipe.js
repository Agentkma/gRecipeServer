
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe', (table)=>{
        table.increments();
        table.text('title');
        table.text('recipeDescription');
        table.text('file');
        table.text('person_personName')
      .references("person.personName")
      .onDelete("CASCADE");
    });
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('recipe');
};
