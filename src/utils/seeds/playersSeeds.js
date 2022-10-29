const { mongoose } = require("mongoose");
const Player = require('../../api/players/players.model');
const DB_URL = "mongodb://localhost:27017/proyectoFinal";

const players = [
  {
    name: "Carlos Soler",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Carlos_Soler_2020.png/490px-Carlos_Soler_2020.png",
    team: "635d4ed61b5b10d59789ff7a",
    age: 25,
    dorsal: 19,
    position: "Mediocentro",
    sports: "635d0b0953b923f2c8205f67"
  },
  {
    name: "Pedri González",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Pedri.png/490px-Pedri.png",
    team: "635d4ed61b5b10d59789ff7b",
    age: 19,
    dorsal: 21,
    position: "Mediocentro",
    sports: "635d0b0953b923f2c8205f67"

  },
  {
    name: "Nico Williams",
    img: "https://img.a.transfermarkt.technology/portrait/big/709187-1644238283.jpg?lm=1",
    team: "635d4ed61b5b10d59789ff7c",
    age: 20,
    dorsal: 2,
    position: "Delantero",
    sports: "635d0b0953b923f2c8205f67"
  },
  {
    name: "Borja Iglesias",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Borja_iglesias_2019001.jpg/490px-Borja_iglesias_2019001.jpg",
    team: "635d4ed61b5b10d59789ff7d",
    age: 29,
    dorsal: 3,
    position: "Delantero",
    sports: "635d0b0953b923f2c8205f67"
  },
 
{
  name: "Brown Lorenzo",
  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lorenzo_Brown_4_KK_Crvena_zvezda_EuroLeague_20191010_%281%29.jpg/1200px-Lorenzo_Brown_4_KK_Crvena_zvezda_EuroLeague_20191010_%281%29.jpg",
  team: "635d4ed61b5b10d59789ff7e",
  age: 32,
  dorsal: 2,
  position: "Base",
  sports: "635d0b0953b923f2c8205f68"
},
{
  name: "Rudy Fernandez",
  img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Rudy_Fern%C3%A1ndez_2016.jpg",
  team: "635d4ed61b5b10d59789ff7f",
  age: 37,
  dorsal: 5,
  position: "Ala",
  sports: "635d0b0953b923f2c8205f68"
},
{
  name: "Sebas Saiz",
  img: "https://images.ecestaticos.com/zznydCVprdFPRmp81zeoJFSkBPM=/0x0:1471x1776/624x752/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fb20%2F399%2Fcfe%2Fb20399cfe29c0b2f93fdbc6694cced09.jpg",
  team: "635d4ed61b5b10d59789ff80",
  age: 27,
  dorsal: 11,
  position: "AlaPivote",
  sports: "635d0b0953b923f2c8205f68"
},
{
  name: "Willy Hernangómez",
  img: "https://phantom-marca.unidadeditorial.es/c2d399253335229221d9bf944fe62547/resize/1320/f/jpg/assets/multimedia/imagenes/2022/10/18/16661110685226.jpg",
  team: "635d4ed61b5b10d59789ff81",
  age: 28,
  dorsal: 14,
  position: "Pivote",
  sports: "635d0b0953b923f2c8205f68"
},
{
  name: "Rafa Nadal",
  img: "https://www.atptour.com/-/media/tennis/players/head-shot/2022/05/25/15/47/nadal-head-2022-may.png",
  team: "635d4ed61b5b10d59789ff82",
  age: 36,
  sports: "635d0b0953b923f2c8205f6a"
},
{
  name: "Pablo Carreño",
  img: "https://www.atptour.com/-/media/tennis/players/head-shot/2022/05/25/15/45/carreno-busta-head-2022-may.png",
  team: "635d4ed61b5b10d59789ff82",
  age: 31,
  sports: "635d0b0953b923f2c8205f6a"
},
{
  name: "Albert Ramos",
  img: "https://www.atptour.com/es/players/albert-ramos-vi%C3%B1olas/r772/www.atptour.com/-/media/tennis/players/head-shot/2019/03/08/17/24/ramos_vinolas_head_ao19.png",
  team: "635d4ed61b5b10d59789ff82",
  age: 34,
  sports: "635d0b0953b923f2c8205f6a"
},
{
  name: "Carlos Alcaraz",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNpp0jQ3G1YgtiacCdumcLoN_8HEJPw8Xfvg&usqp=CAU",
  team: "635d4ed61b5b10d59789ff82",
  age: 19,
  sports: "635d0b0953b923f2c8205f6a"
},

{
  name: "Rodrigo Corrales",
  img: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Rodrigo_Corrales_20170924.jpg",
  team: "635d4ed61b5b10d59789ff86",
  age: 31,
  dorsal: 12,
  position: "Portero",
  sports: "635d0b0953b923f2c8205f69"
},
  {
  name: "Agustin Casado",
  img: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/01/19/16426192793553.jpg",
  team: "635d4ed61b5b10d59789ff87",
  age: 25,
  dorsal: 25,
  position: "Central",
  sports: "635d0b0953b923f2c8205f69"
},
{
  name: "Adrià Figueres",
  img: "https://pbs.twimg.com/profile_images/1412789564561887235/avQrS7WP_400x400.jpg",
  team: "635d4ed61b5b10d59789ff88",
  age: 33,
  dorsal: 17,
  position: "Pivote",
  sports: "635d0b0953b923f2c8205f69"
},
{
  name: "Antonio Garcia",
  img: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Antonio_saltando.jpg",
  team: "635d4ed61b5b10d59789ff89",
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
