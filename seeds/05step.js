
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('step').del()
    .then(function () {
      // Inserts seed entries
      return knex('step').insert([
        {id: 1,
        order: 1,
        description: "roll dough into 1/4 inch thick round formation",
        recipe_id : 1},
        {id: 2,
        order: 2,
        description: "spread marinara sauce evenly atop the dough to within 1inch of edge",
        recipe_id : 1},
        {id: 3,
        order: 3,
        description: "place pepperoni slices atop the maranara sauce spaced evenly",
        recipe_id : 1},
        {id: 4,
        order: 4,
        description: "sprinkle cheese atop the pepperoni and maranara sauce as evenly as possible",
        recipe_id : 1},
        {id: 5,
        order: 5,
        description: "spread olive oil on the pizza pan spread evenly",
        recipe_id : 1},
        {id: 6,
        order: 6,
        description: "put pizza on pizza pan and place in oven preheated to 400 degrees farenheit and cook for 10 minutes",
        recipe_id : 1},
        {id: 7,
        order: 7,
        description: "remove pizza from oven and allow 5 minutes to cool before slicing",
        recipe_id : 1},
      ]);
    });
};
