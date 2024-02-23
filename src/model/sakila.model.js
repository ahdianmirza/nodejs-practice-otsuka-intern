const sakila = require('./../database/sakila.config');

getAll = async () => await sakila.select('*').from('film');
getById = async (id) => await sakila.select('*').from('film').where('film_id', id);
getWhere = async (column, value) => await sakila.select('*').from('film').where(column, value);

module.exports = {
  getAll,
  getById,
  getWhere,
};