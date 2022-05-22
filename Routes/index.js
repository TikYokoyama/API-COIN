//ROTAS - sao o endpoint (pontos de entrada) da nossa aplicacao - nesse caso: GET / /moedas

//preciso importar o express pras rotas funcionares
const express = require("express");
//importar o recurso de rotas do express
const routes = express.Router(); //lista de rotas (comeca vazia)
//importar a funcao do Controller
const MoedasController = require("../Controller/moeda.controller")

routes.get('/', MoedasController.getHome); //adicionanto uma nova rota a minha lista
routes.get('/moedas', MoedasController.listarMoedas);

//como as rotas sao genericas, ou seja, nao possuem servidor, eu preciso exportar um modulo com essas rotas pra usar dentro do meu servidor
module.exports = routes; //exportando a lista completa de rotas