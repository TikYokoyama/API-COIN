//SERVIDOR

const express = require("express");
const cors = require("cors"); //para n ter q ficar colocar no setHeader - ele permite q nosso servidor seja utilizado pelos servidores origin
const fs = require('fs');
const routes = require("./Routes")
const app = express(); //como se fosse http.createserver          

app.use(cors()); //liberando cors

app.use(routes)

app.listen(4000, ()=>console.log("Servidor rodando na porta 4000"))


// 1.ponto de entrada = rotas
// 2.Controller
// 3.Model
// 4.View - front