const { mongoose } = require("mongoose");
const Player = require('../../api/players/players.model');
const DB_URL = "mongodb://localhost:27017/proyectoFinal";

const players = [
  {
    name: "Carlos Soler",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Carlos_Soler_2020.png/490px-Carlos_Soler_2020.png",
    team: "València F.C",
    age: 25,
    dorsal: 19,
    position: "Mediocentro",
    sports: "635d0b0953b923f2c8205f67"
  },
  {
    name: "Pedri González",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Pedri.png/490px-Pedri.png",
    team: "F.C.Barcelona",
    age: 19,
    dorsal: 21,
    position: "Mediocentro",
    sports: "635d0b0953b923f2c8205f67"

  },
  {
    name: "Nico Williams",
    img: "https://img.a.transfermarkt.technology/portrait/big/709187-1644238283.jpg?lm=1",
    team: "Atheltic Club de Bilbao",
    age: 20,
    dorsal: 2,
    position: "Delantero",
    sports: "635d0b0953b923f2c8205f67"
  },
  {
    name: "Borja Iglesias",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Borja_iglesias_2019001.jpg/490px-Borja_iglesias_2019001.jpg",
    team: "Real Betis Balompié",
    age: 29,
    dorsal: 3,
    position: "Delantero",
    sports: "635d0b0953b923f2c8205f67"
  },
 
{
    name: "Brown Lorenzo",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg/500px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg",
    team: "Maccabi Tel Aviv",
    age: 32,
    dorsal: 2,
    position: "Base",
    sports: "635d0b0953b923f2c8205f68"
  },
  {
    name: "Rudy Fernandez",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg/500px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg",
    team: "Real Madrid",
    age: 37,
    dorsal: 5,
    position: "Ala",
    sports: "635d0b0953b923f2c8205f68"
  },
  {
    name: "Sebas Saiz",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg/500px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg",
    team: "Alvark Tokio",
    age: 27,
    dorsal: 11,
    position: "AlaPivote",
    sports: "635d0b0953b923f2c8205f68"
  },
  {
    name: "Willy Hernangómez",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg/500px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg",
    team: "New Orleans Pelicans",
    age: 28,
    dorsal: 14,
    position: "Pivote",
    sports: "635d0b0953b923f2c8205f68"
  },
{
    name: "Rafa Nadal",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg/500px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg",
    team: "Paris Saint Germain",
    age: 30,
    Dorsal: 22,
    Position: "Delantero",
    sports: "635d0b0953b923f2c8205f6a"
  },
  {
    name: "Pablo Sarabia",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg/500px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg",
    team: "Paris Saint Germain",
    age: 30,
    dorsal: 22,
    position: "Delantero",
    sports: "635d0b0953b923f2c8205f6a"
  },
  {
    name: "Pablo Sarabia",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg/500px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg",
    team: "Paris Saint Germain",
    age: 30,
    dorsal: 22,
    position: "Delantero",
    sports: "635d0b0953b923f2c8205f6a"
  },
  {
    name: "Pablo Sarabia",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg/500px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg",
    team: "Paris Saint Germain",
    age: 30,
    dorsal: 22,
    position: "Delantero",
    sports: "635d0b0953b923f2c8205f6a"
  },

{
    name: "Rodrigo Corrales",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg/500px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg",
    team: "MKB Vesszprém",
    age: 31,
    dorsal: 12,
    position: "Portero",
    sports: "635d0b0953b923f2c8205f69"
  },
    {
    name: "Agustin Casado",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg/500px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg",
    team: "Ciudad de Logroño",
    age: 25,
    dorsal: 25,
    position: "Central",
    sports: "635d0b0953b923f2c8205f69"
  },
  {
    name: "Adrià Figueres",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg/500px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg",
    team: "C'Chartres MHB",
    age: 33,
    dorsal: 17,
    position: "Pivote",
    sports: "635d0b0953b923f2c8205f69"
  },
  {
    name: "Antonio Garcia",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg/500px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg",
    team: "Fraikin BM. Granollers",
    age: 37,
    dorsal: 27,
    position: "Lateral Izquierdo",
    sports: "635d0b0953b923f2c8205f69"
  },
  

  
];



mongoose.connect(DB_URL)
  .then(async () => {
    const allPlayers = await Player.find().lean();
    
    if(!allPlayers.length) {
      console.log('[seed]: No se encuentran jugadores, continuo...')
    } else {
      console.log(`[seed]: Encontrados ${allPlayers.length} jugadores.`);
      await Player.collection.drop();
      console.log('[seed]: Colección Players eliminada correctamente');
    }
  })
  .catch((error) => console.log('[seed]: Error eliminando la colección -->', error))
  .then(async() => {
    await Player.insertMany(players);
    console.log('[seed]: Nuevos jugadores añadidos con éxito');
  })
  .catch((error) => console.log('[seed]: Error añadiendo los jugadores', error))
  .finally(() => mongoose.disconnect());
