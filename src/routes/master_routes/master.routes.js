const express = require('express');
const router = express.Router();

const FilmController = require('./../../controller/master_controller/FilmController');

// film data
router.get("/film", FilmController.getAllFilm);

module.exports = router;