const express = require("express");
const Team = require("./teams.model");
const router = express.Router();
const { isAuth, isAdmin } = require('../../middlewares/auth');
const upload = require("../../middlewares/file");

router.get('/', async(req, res, next) => {
  try {
    const allTeams = await Team.find()
    return res.status(200).json(allTeams);
  } catch(error) {
    return next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const teamToFind = await Team.findById(id);
    return res.status(200).json(teamToFind);
  } catch (error) {
    return next(error);
  }
});

router.get('/getbyname/:name', async (req, res, next) => {
  try {
    const name = req.params.name;
    const teamToFind = await Team.findOne({name: name});
    return res.status(200).json(teamToFind);
  } catch (error) {
    return next(error);
  }
});

router.post('/create', [isAuth], upload.single("img"), async (req, res, next) => {
  try {
    const team = req.body;
    if (req.file) {
      team.img = req.file.path;
    }
    const newTeam = new Team(team);
    const created = await newTeam.save();
    return res.status(201).json(created);
  } catch (error) {
    return next(error);
  }
});

router.delete('/delete/:id', [isAuth], async (req, res, next) => {

  try {
    const id = req.params.id;
    const teamToDelete = await Team.findByIdAndDelete(id);
    return res.status(200).json("Se ha conseguido borrar el equipo");
  } catch (error) {
    return next(error);
  }

});

router.put('/edit/:id', [isAuth], async (req, res, next) => {
  try {
    const id = req.params.id;
    const team = req.body;
    const teamModify = new Team(team);
    teamModify._id = id;
    const teamUpdated = await Team.findByIdAndUpdate(id, teamModify);
    return res.status(200).json({mensaje: "Se ha conseguido editar el equipo", teamModificado: teamUpdated});
  } catch (error) {
    return next(error);
  }
})


module.exports = router;