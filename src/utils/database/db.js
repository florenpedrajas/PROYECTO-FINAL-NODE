const mongoose = require('mongoose');




const connectDb = async () => {
    console.log(DB_URL);
  try {
    const db = await mongoose.connect(DB_URL);
    const { name, host } = db.connection;
    console.log(`Conectado con éxito a la db: ${name} en ${host}`);
  } catch(error) {
    console.log('Error conectando a la base de datos:', error);
  }
};

module.exports = {
  connectDb
}
