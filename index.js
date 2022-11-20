const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/Carros.route');
const connectToDatabase = require('./src/database/database');

const port = 3000;
const app = express();

connectToDatabase();

app.use(express.json());

app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header('Access-Control-Allow-Origin', '*');
  //Quais são os métodos que a conexão pode realizar na API
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  app.use(cors());
  next();
});

app.use('/carros', routes);

app.listen(port, () => {
  console.log(
    `Servidor Bugando na porta http://localhost:${port}/carros/todosCarros`,
  );
});
