const express = require("express");
const Player = require("./players.model");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const allPlayers = await Player.find();
        return res.status(200).json(allPlayers);
    } catch (error) {
        return res.status(500).json("Error al leer los jugadores");
    }
})
router.post("/postNewPlayer", async (req, res) => {
  try {
    const player = req.body;
    const newPlayer = new Player(player);
    const created = await newPlayer.save();
    return res.status(201).json(created);
  } catch (error) {
    return res.status(500).json("Error al crear el jugador");
  }
});

module.exports = router;


