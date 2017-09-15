
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {id: 1,
        name: 'Kev Pepperoni Pizza',
        person_name : 'Kevin Anderson',
        description: 'The best pizza ever',
        image: 'pizza.jpeg',
        ingredient_id: 1,
        ingredient_id: 2,
        ingredient_id: 3,
        ingredient_id: 4,
        ingredient_id: 5,
        step_id: 1,
        step_id: 2,
        step_id: 3,
        step_id: 4,
        step_id: 5,
        step_id: 6,
        step_id: 7,
    },

]);
    });
};
