const express = require("express");
const Sport = require("./sports.model");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const allSports = await Sport.find();
        return res.status(200).json(allSports);
    } catch (error) {
        return res.status(500).json("Error al leer los deportes");
    }
})
router.post("/postNewSport", async (req, res) => {
  try {
    const sport = req.body;
    const newSport = new Sport(sport);
    const created = await newSport.save();
    return res.status(201).json(created);
  } catch (error) {
    return res.status(500).json("Error al crear el deporte");
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const sportToFind = await Sport.findById(id);
    return res.status(200).json(sportToFind);
  } catch (error) {
    return next(error);
  }
});

router.get('/getbyname/:name', async (req, res, next) => {
  try {
    const name = req.params.name;
    const sportToFind = await Sport.findOne({name: name});
    return res.status(200).json(sportToFind);
  } catch (error) {
    return next(error);
  }
});

router.delete('/delete/:id', async (req, res, next) => {

  try {
    const id = req.params.id;
    const sportToDelete = await Sport.findByIdAndDelete(id);
    return res.status(200).json("Se ha conseguido borrar el deporte");
  } catch (error) {
    return next(error);
  }

});

router.put('/edit/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const sport = req.body;
    const sportModify = new Sport(sport);
    sportModify._id = id;
    const sportUpdated = await Sport.findByIdAndUpdate(id, sportModify);
    return res.status(200).json({mensaje: "Se ha conseguido editar el deporte", sportModificado: sportUpdated});
  } catch (error) {
    return next(error);
  }
})

module.exports = router;


