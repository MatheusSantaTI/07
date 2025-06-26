const express = require('express');
const path = require('path');
const app = express();
const receitaController = require('./controllers/receitaController');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/receitas', receitaController.listar);

app.listen(3000, () =>
  console.log('Servidor iniciado em http://localhost:3000/receitas')
);
// This code sets up an Express server that serves a list of recipes using EJS as the view engine.
// It listens on port 3000 and renders the recipes when the '/receitas' route is accessed.  