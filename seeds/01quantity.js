
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quantity').del()
    .then(function () {
      // Inserts seed entries
      return knex('quantity').insert([
        {id: 1,
        unit: 'ounces',
        amount: 2,
        },

      ]);
    });
};
