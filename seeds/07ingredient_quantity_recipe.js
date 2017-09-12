
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient_quantity_recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_quantity_recipe').insert([
        {id: 1,
        ingredient_id: 1,
        quantity_id: 1,
        recipe_id: 1,
    },
      ]);
    });
};
