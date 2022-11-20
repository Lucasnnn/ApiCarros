const mongooose = require('mongoose');

const CarroSchema = new mongooose.Schema({
  linkFoto: { type: String, required: true },
  nome: { type: String, required: true },
  tipo: { type: String, required: true },
  ano: { type: string, required: true },
  potencia: { type: string, required: true },
});

const Carro = mongooose.model('carros', CarroSchema);

module.exports = Carro;
