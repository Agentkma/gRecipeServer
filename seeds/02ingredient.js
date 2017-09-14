
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {id: 1,
        name: 'pepperoni',
        description: 'sliced'},
        {id: 2,
        name: 'mozzerella chese',
        description: 'grated'},
        {id: 3,
        name: 'dough',
        description: 'white italian'},
        {id: 4,
        name: 'marinara sauce',
        description: 'red'},
        {id: 5,
        name: 'olive oil',
        description: 'extra virgin'},

      ]);
    });
};
