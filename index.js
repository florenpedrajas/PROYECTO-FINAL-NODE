const express = require("express");
const db = require("./src/utils/database/db");
const indexRoutes = require("./src/api/index/index.routes");
const cloudinary= requiere("cloudinary").v2;


db.connectDb();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET

})


const server = express();
const PORT = 3000;




server.listen(PORT, () => {
  console.log(`Servidor a todo gas en http://localhost:${PORT}`);
});

