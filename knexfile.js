// Update with your config settings.

require ('dotenv').config()

module.exports = {

  development: {
  ///postrges database
    client:'pg',
    connection: 'postgres://localhost/grecipes',
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
