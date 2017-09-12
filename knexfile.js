// Update with your config settings.

module.exports = {

  development: {
  ///postrges database
    client:'pg',
    connection: 'postgres://localhost/gRecipes',
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URI
  }

};
