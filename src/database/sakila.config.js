const sakila = require('knex')({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_POR,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    },
    useNullAsDefault: false,
    log: {
        warn(message) {
            console.info(message);
        },
        error(message) {
            console.info(message);
        },
        deprecate(message) {
            console.info(message);
        },
        debug(message) {
            console.info(message)
        }
    }
});

sakila.client.config.connectionOptions = { multipleStatements: false };
module.exports = sakila;