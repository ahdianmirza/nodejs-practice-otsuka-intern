const model = require('../../model/sakila.model');
const api = require('../../tools/common');

// film by id controller
getFilmByID = async (req, res) => {
    if (!isNaN(req.params.id)) {
        let data = await model.getById(req.params.id);
        return api.ok(res, data);
    } else {
        return api.error(res, "bad request", 400);
    }
}

getAllFilm = async (req, res) => {
    let data = await model.getAll();
    return api.ok(res, data);
}

module.exports = {
  getFilmByID,
  getAllFilm,
};