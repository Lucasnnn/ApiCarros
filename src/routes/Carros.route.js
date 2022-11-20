const router = require('express').Router();
const carrosService = require('../controllers/Carros.controller');

router.get('/todosCarros', carrosService.todosCarrosController);
router.get('/carro/:id', carrosService.carroIdController);
router.post('/criarCarro', carrosService.criarCarroController);
router.put('/atualizarCarro/:id', carrosService.atualizarCarroController);
router.delete('/deletarCarro/:id', carrosService.deletarCarroController);

module.exports = router;
