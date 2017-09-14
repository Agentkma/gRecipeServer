
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quantity').del()
    .then(function () {
      // Inserts seed entries
      return knex('quantity').insert([
        {id: 1,
        unit: 'ounces',
        amount: 8,
        },
        {id: 2,
        unit: 'ounces',
        amount: 10,
        },
        {id: 3,
        unit: 'ounces',
        amount: 2,
        },
        {id: 4,
        unit: 'ounces',
        amount: 16,
        },
        {id: 5,
        unit: 'cup',
        amount: 2,
        },


      ]);
    });
};
