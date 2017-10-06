
exports.up = function(knex, Promise) {
    return knex.schema.createTable('person', (table)=>{
        table.text('personName').primary();

    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('person');
};
