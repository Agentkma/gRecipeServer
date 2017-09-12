
exports.up = function(knex, Promise) {

    return knex.schema.createTable('quantity', (table)=>{
        table.increments();
        table.text('unit');
        table.integer('amount');

    });

};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists('quantity');

};
