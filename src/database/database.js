const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL;

function conexaoBanco() {
  mongoose
    .connect(MONGO_URL)
    .then(() => console.log('Serà que deu certo??'))
    .catch((error) => console.log(`Aqui não !!, erro: ${error}`));
}

module.exports = conexaoBanco;
