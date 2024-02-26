const express = require('express');
const router = express.Router();

const FilmController = require('./../../controller/master_controller/FilmController');
const ActorController = require('./../../controller/master_controller/ActorController');

// film data
router.get("/film", FilmController.getAllFilm);
router.get("/film/:id", FilmController.getFilmByID);
router.get("/film/:column/:value", FilmController.getWhereFilm);
router.post("/film", FilmController.insertFilm);
router.put("/film/:id", FilmController.updateFilm);
router.delete("/film/:id", FilmController.deleteFilm);

// actor data
router.get("/actor", ActorController.getAllActor);
router.get("/actor/:id", ActorController.getActorByID);
router.get("/actor/:column/:value", ActorController.getWhereActor);
router.post("/actor", ActorController.insertActor);
router.put("/actor/:id", ActorController.updateActor);
router.delete("/actor/:id", ActorController.deleteActor);

module.exports = router;