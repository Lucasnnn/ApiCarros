const Carros = require('../models/Carros');

const todosCarrosService = async () => {
  const todosCarros = await Carros.find();
  return todosCarros;
};

const carroIdService = async (idParam) => {
  const carro1 = await Carros.findById(idParam);
  return carro1;
};

const criarCarroService = async (newPaleta) => {
  const criarCarro = await Carros.create(newPaleta);
  return criarCarro;
};

const atualizarCarroService = async (idParam, editPaleta) => {
  const atualizarCarro = await Carros.findByIdAndUpdate(idParam, editPaleta);
  return atualizarCarro;
};

const deletarCarroService = async (idParam) => {
  return await Carros.findByIdAndDelete(idParam);
};

module.exports = {
  todosCarrosService,
  carroIdService,
  criarCarroService,
  atualizarCarroService,
  deletarCarroService,
};
