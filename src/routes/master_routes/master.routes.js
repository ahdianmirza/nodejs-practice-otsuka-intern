const express = require('express');
const router = express.Router();

const FilmController = require('./../../controller/master_controller/FilmController');

// film data
router.get("/film", FilmController.getAllFilm);
router.get("/film/:id", FilmController.getFilmByID);
router.get("/film/:column/:value", FilmController.getWhereFilm);

module.exports = router;