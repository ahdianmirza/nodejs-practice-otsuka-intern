const db = require('./../database/sakila.config');

getAccount = async (nik) => await db('v_users').where('nik', nik);

module.exports = {
    getAccount
};