const mongooose = require('mongoose');

const CarroSchema = new mongooose.Schema({
  linkFoto: { type: String, required: true },
  nome: { type: String, required: true },
  tipo: { type: String, required: true },
  ano: { type: String, required: true },
  potencia: { type: String, required: true },
});

const Carro = mongooose.model('carros', CarroSchema);

module.exports = Carro;
