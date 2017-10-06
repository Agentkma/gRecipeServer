'use strict';
const knex = require('./knex'); //the connection


module.exports = {

    getAllRecipes(){
        return knex('recipe');
    }

};
