
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('step').del()
    .then(function () {
      // Inserts seed entries
      return knex('step').insert([
        {id: 1,
        order: 1,
        description: "mix ingredients",
        recipe_id : 1},
      ]);
    });
};
