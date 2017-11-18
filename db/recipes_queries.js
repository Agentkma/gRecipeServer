"use strict";
const knex = require("./knex"); //the connection

module.exports = {
	_addRecipe: addRecipe,
	_addSteps: addSteps,
	//BUG not returning all recipes...only 1st one
	getAllRecipes() {
		// get all recipe
		return knex("recipe")
			.select(
				"recipe.id",
				"title",
				"recipeDescription",
				"file",
				"personName",
				"ingredientName",
				"amount",
				"unit",
				"order",
				"stepDescription"
			)
			.join("ingredient as ing", "ing.recipe_id", "=", "recipe.id")
			.join("step as stp", "stp.recipe_id", "=", "recipe.id")
			.join("person as per", "recipe.person_id", "=", "per.id")
			.then(data => {

				return reformattedRecipe(data);
			});
	},

	getRecipeById(id) {
		//TODO add rest of recipe ....steps, ingredient, person.
		// return knex("recipe")
		// 	.where("id", id)
		// 	.first();

			return knex("recipe")
				.where("id", id)
				.select(
					"recipe.id",
					"title",
					"recipeDescription",
					"file",
					"personName",
					"ingredientName",
					"amount",
					"unit",
					"order",
					"stepDescription"
				)
				.join("ingredient as ing", "ing.recipe_id", "=", "recipe.id")
				.join("step as stp", "stp.recipe_id", "=", "recipe.id")
				.join("person as per", "recipe.person_id", "=", "per.id")
				.then(data => {
					console.log(reformattedRecipe(data));
					return reformattedRecipe(data);
				});
	},
	removeRecipe(id) {
		return knex("recipe")
			.where("id", id)
			.del();
	},

	updateRecipe(id, recipe) {
		return (
			knex("recipe")
				.where("id", id)
				//make sure object from front end matches table keys
				.update(recipe, "*")
		);
	},

	createRecipe(recipe) {
		return Promise.resolve(recipe)
			.then(addPerson)
			.then(addRecipe)
			.then(addSteps);
	}
};

/////// HELPER FUNCTIONS //////////////////////

function reformattedRecipe(recipes) {
	const reformatted = [];
	//a place to look up recipe
	const recipeById = {};
	recipes.forEach(recipe => {
		if (recipeById[recipe.id]) {
			function checkIfOrder(array, item) {
				return array.some(n => n.order === item);
			}

			function checkIfIng(array, item) {
				return array.some(n => n.ingredientName === item);
			}

			if (
				!checkIfOrder(recipeById[recipe.id].step, recipe.order)
			) {
				recipeById[recipe.id].step.push({
					order: recipe.order,
					stepDescription: recipe.stepDescription
				});
			}

			if (
				!checkIfIng(
					recipeById[recipe.id].ingredient,
					recipe.ingredientName
				)
			) {

				recipeById[recipe.id].ingredient.push({
					ingredientName: recipe.ingredientName,
					amount: recipe.amount,
					unit: recipe.unit
				});
			}
		} else {
			// if recipes does not exist in reformatted
			recipeById[recipe.id] = {
				id: recipe.id,
				title: recipe.title,
				recipeDescription: recipe.recipeDescription,
				file: recipe.file,
				personName: recipe.personName,
				step: [
					{
						order: recipe.order,
						stepDescription: recipe.stepDescription
					}
				],
				ingredient: [
					{
						ingredientName: recipe.ingredientName,
						amount: recipe.amount,
						unit: recipe.unit
					}
				]
			};
			reformatted.push(recipeById[recipe.id]);
		}
	});
	return reformatted;
}

function addPerson(data) {
	return knex("person")
		.returning("id")
		.insert({
			personName: data.personName
		})
		.then(id => {
			return { id: id[0], data };
		});
}

function addRecipe({ id, data }) {
	return knex("recipe")
		.returning("id")
		.insert({
			title: data.title,
			recipeDescription: data.recipeDescription,
			file: data.file,
			person_id: id
		})
		.then(id => {
			return { id: id[0], data };
		});
}
function addSteps({ id, data }) {
	let steps = data.step;
	let ingredients = data.ingredient;
	return Promise.all(
		stepsPromises({ id, steps }),
		ingredientsPromises({ id, ingredients })
	).catch(err => {
		console.log("promise all", err);
	});
}


function stepsPromises({ id, steps }) {
	return steps.map(step => {
		return knex("step").insert({
			order: step.order,
			stepDescription: step.stepDescription,
			recipe_id: id[0]
		});
	});
}

function ingredientsPromises({ id, ingredients }) {
	return ingredients.map(ingredient => {
		return knex("ingredient").insert({
			ingredientName: ingredient.ingredientName,
			unit: ingredient.unit,
			amount: ingredient.amount,
			recipe_id: id
		});
	});
}
