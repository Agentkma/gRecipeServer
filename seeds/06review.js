
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('review').del()
    .then(function () {
      // Inserts seed entries
      return knex('review').insert([
        {id: 1,
        rating: 4,
        text: "I love this",
        user_id: 1,
        recipe_id: 1,
    },

      ]);
    });
};
