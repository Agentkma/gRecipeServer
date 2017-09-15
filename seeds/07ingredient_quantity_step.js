
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient_quantity_step').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_quantity_step').insert([
        {id: 1,
        ingredient_id: 3,
        quantity_id: 4,
        step_id: 1,
        },
        {id: 2,
        ingredient_id: 4,
        quantity_id: 5,
            step_id: 2,
        },
        {id: 3,
        ingredient_id: 1,
        quantity_id: 1,
        step_id: 3,
        },
        {id: 4,
        ingredient_id: 2,
        quantity_id: 2,
        step_id: 4,
        },
        {id: 5,
        ingredient_id: 5,
        quantity_id: 3,
        step_id: 5,
        },
    
      ]);
    });
};
