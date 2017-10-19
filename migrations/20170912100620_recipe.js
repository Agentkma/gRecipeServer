exports.up = function(knex, Promise) {
	return knex.schema.createTable("recipe", table => {
		table.increments();
		table.text("title");
		table.text("recipeDescription");
		table.text("file");
		table
			.integer("person_id")
			.references("person.id")
			.onDelete("CASCADE");
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists("recipe");
};
