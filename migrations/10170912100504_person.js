exports.up = function(knex, Promise) {
	return knex.schema.createTable("person", table => {
		table.increments();
		table.text("personName");
		// table.unique("personName");
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists("person");
};
