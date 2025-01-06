// Importamos el módulo mongoose para poder interactuar con MongoDB
const mongoose = require('mongoose');

// Extraemos las variables de entorno necesarias para configurar la URI de conexión a MongoDB
// Estas variables deben estar definidas previamente en un archivo .env
const { MULTIGESTOR_MONGODB_HOST, MULTIGESTOR_MONGODB_PORT, MULTIGESTOR_MONGODB_DATABASE } = process.env;

// Construimos la URI de conexión a MongoDB usando las variables de entorno extraídas
// El formato de la URI es 'mongodb://<host>:<port>/<database>'
const MONGODB_URI = `mongodb://${MULTIGESTOR_MONGODB_HOST}:${MULTIGESTOR_MONGODB_PORT}/${MULTIGESTOR_MONGODB_DATABASE}`;

// Definimos una función asincrónica para conectar a la base de datos MongoDB
// Utilizamos 'async' para poder usar 'await' dentro de la función
async function connectDB() {
  try {
    // La función 'await' pausa la ejecución hasta que mongoose.complete la conexión
    await mongoose.connect(MONGODB_URI);

    console.log('Conexión exitosa con la base de datos.');
  } catch (err) {
    console.error('Error al conectar con la base de datos:', err.message);
  }
}

connectDB();