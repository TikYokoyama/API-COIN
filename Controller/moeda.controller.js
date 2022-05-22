//CONTROLER - é a funcao que a rota escolhida vai fazer
const listMoedas = require('../Models/moedas.json');

const MoedasController = {
    //conversando com o "/" routes
    getHome(req, res){
        res.send('<h1>Teste html</h1>')
    },

    //conversando com o "/moedas"
    listarMoedas(req, res){
        res.json(listMoedas)
    }
}

module.exports = MoedasController;