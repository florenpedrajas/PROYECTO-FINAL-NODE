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

module.exports = router;const express = require("express");


