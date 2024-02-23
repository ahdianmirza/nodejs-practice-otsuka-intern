const sakila = require('knex')({
    client: "mysql",
    connection: {
        host: "localhost",
        port: "3306",
        user: "root",
        password: "",
        database: "internship_db_training"
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