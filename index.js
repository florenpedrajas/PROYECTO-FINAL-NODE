const express = require("express");
require("dotenv").config();
const db = require("./src/utils/database/db");
const indexRoutes = require("./src/api/index/index.routes");
const cloudinary= require("cloudinary").v2;
const playersRoutes = require("./src/api/players/players.routes");
const sportsRoutes = require("./src/api/sports/sports.routes");

const cors = require("cors");






db.connectDb();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET

})


const server = express();
const PORT = 3000;

server.use(
  cors({
    origin: "",
    credentials: true,
  })
);

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/", indexRoutes);
server.use("/players", playersRoutes);
server.use("/sports", sportsRoutes);

server.use("", (req, res) => {
  return res.status(404).json("Ruta no encontrada");
});

server.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || "unexpected error");
});




server.listen(PORT, () => {
  console.log(`Servidor a todo gas en http://localhost:${PORT}`);
});


