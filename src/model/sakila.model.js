const sakila = require('./../database/sakila.config');

getAll = async () => await sakila.select('*').from('film');

getById = async () => await sakila.select('*').from('film').where('film_id', id);

module.exports = {
  getAll,
  getById,
};