
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('review').del()
    .then(function () {
      // Inserts seed entries
      return knex('review').insert([
        {id: 1,
        rating: 4,
        text: "I love this pepperoni pizza recipe!  It's super simple and easy to follow",
        person_name: "Kevin Anderson",
        recipe_id: 1,
    },
      ]);
    });
};
