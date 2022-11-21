const carrosService = require('../services/Carros.service');
const mongoose = require('mongoose');

const todosCarrosController = async (req, res) => {
  const todosCarros = await carrosService.todosCarrosService();

  if (todosCarros.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhuma paleta cadastrada!' });
  }
  res.send(todosCarros);
};

const carroIdController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const carroeEscolhido = await carrosService.carroIdService(idParam);

  if (!carroeEscolhido) {
    return res.status(404).send({ message: 'Carro não encontrada!' });
  }

  res.send(carroeEscolhido);
};

const criarCarroController = async (req, res) => {
  const carro = req.body;

  if (
    !carro ||
    !carro.ano ||
    !carro.tipo ||
    !carro.nome ||
    !carro.linkFoto ||
    !carro.potencia
  ) {
    return res.status(400).send({ message: 'Envie todos os dados do carro !' });
  }
  const novoCarro = await carrosService.criarCarroService(carro);
  res.status(201).send(novoCarro);
};

const atualizarCarroController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const carroEditado = req.body;

  if (
    !carroEditado ||
    !carroEditado.ano ||
    !carroEditado.tipo ||
    !carroEditado.nome ||
    !carroEditado.linkFoto ||
    !carroEditado.potencia
  ) {
    return res.status(404).send({ message: 'Faltando informação !' });
  }

  const atualizarCarroController = await carrosService.atualizarCarroService(
    idParam,
    carroEditado,
  );
  res.send(atualizarCarroController);
};

const deletarCarroController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  await carrosService.deletarCarroService(idParam);
  res.send({ message: 'Carro deletado com sucesso!' });
};

module.exports = {
  todosCarrosController,
  carroIdController,
  criarCarroController,
  atualizarCarroController,
  deletarCarroController,
};
