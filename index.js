const http = require('http'); //http = hipertext transfer protocol

//Linkar/importar moedas.json com esse arquivo
const listaDeMoedas = require('./moedas.json');

//Criar um servidor, que vai receber uma REQuisicao e devolver uma RESposta
const app = http.createServer((req, res) => {
    console.log(listaDeMoedas); //mostra as moedas no terminal

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json"); //Fala pro navegador que tipo de informacao estamos transmitindo

    const respostaEmJson = JSON.stringify(listaDeMoedas); //transformar a lista em texto pq http so le coisas em txt

    res.write(respostaEmJson); //escreve na web

    res.end(); //finaliza a funcao
})

//Criar uma porta para o servidor rodar, no caso 3000. Se der certo, ele mostra o callback
app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));