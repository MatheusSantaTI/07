const receitaModel = require('../models/receitaModel');

const listar = (req, res) => {
  const receitas = receitaModel.getTodas();
  res.render('receitas', { receitas });
};

module.exports = { listar };
// controllers/receitaController.js
// Este arquivo define o controlador para gerenciar as receitas. Ele importa o modelo de receitas e     