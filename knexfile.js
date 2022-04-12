// Update with your config settings.

module.exports = {


    client: 'mysql2',
    connection: {
      database: 'my_db',
      user:     'root',
      password: 'root'
    },

    migrations: {
      directory: 'knex_migrations'
    }


};
