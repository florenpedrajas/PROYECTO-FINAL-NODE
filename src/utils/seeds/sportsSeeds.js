const { mongoose } = require("mongoose");
const Sport = require('../../api/sports/sports.model');
const { DB_URL } = require('../database/db');

const sports = [
  {
    name: "Futbol",  //trim quita estacios si lo ponemos por error con un espacio
    players: 11,
    matchTime: 90,
    type: "Deporte de equipo",
    
  },
  {
    name: "Baloncesto",  //trim quita estacios si lo ponemos por error con un espacio
    players: 5,
    matchTime: 40,
    type: "Deporte de equipo",
    
  },
  {
    name: "Balonmano",  //trim quita estacios si lo ponemos por error con un espacio
    players: 7,
    matchTime: 60,
    type: "Deporte de equipo",
    
  },
  {
    name: "Tenis",  //trim quita estacios si lo ponemos por error con un espacio
    players: 1,
    type: "Deporte de equipo",
    
  },
  
];



mongoose.connect(DB_URL)
  .then(async () => {
    const allSports = await Sport.find().lean();
    
    if(!allSports.length) {
      console.log('[seed]: No se encuentran deportes, continuo...')
    } else {
      console.log(`[seed]: Encontrados ${allSports.length} deportes.`);
      await Sport.collection.drop();
      console.log('[seed]: Colección Sports eliminada correctamente');
    }
  })
  .catch((error) => console.log('[seed]: Error eliminando la colección -->', error))
  .then(async() => {
    await Sport.insertMany(sports);
    console.log('[seed]: Nuevos deportes añadidos con éxito');
  })
  .catch((error) => console.log('[seed]: Error añadiendo los deportes', error))
  .finally(() => mongoose.disconnect());
