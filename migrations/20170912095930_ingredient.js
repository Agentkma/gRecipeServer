
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredient', (table)=>{
      table.increments();
      table.text('name');
      table.text('description');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredient');

};
