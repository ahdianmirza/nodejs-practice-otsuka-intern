const sakila = require('./../database/sakila.config');

// query table film
getAll = async () => await sakila.select('*').from('film');
getById = async (id) => await sakila.select('*').from('film').where('film_id', id);
getWhere = async (column, value) => await sakila.select('*').from('film').where(column, value);
insert = async (data) => await sakila('film').insert(data);
update = async (id, data) => await sakila('film').where('film_id', id).update(data);
deleteData = async (id) => await sakila('film').where('film_id', id).del();

// query table actor
getAllActor = async () => await sakila.select('*').from('actor');

module.exports = {
  getAll,
  getById,
  getWhere,
  insert,
  update,
  deleteData,
  getAllActor,
};