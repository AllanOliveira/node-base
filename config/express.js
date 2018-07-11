var express = require('express'); // importa modulo do express
var app = express(); //executa o modulo do express
var consign = require('consign');//modulo que cuidara da importacao das dependencias para nossa app.
var bodyParse = require('body-parser');

app.use(express.static('./static')); //carrega a pasta static como conteudo estatico no express.
app.use(bodyParse.json());

consign({cwd:'app'})//Executa o consign setando como pasta raiz a pasta app
    .include('api')//Inclui a pasta api como dependencia
    .then('routes')//Inclui a pasta routes como dependencia, mas depois da inclusao da pasta anterior(no caso api)
    .into(app);//diz para o consig a onde ele deve incuir essas dependencias, no caso na variavel app(express)

module.exports = app; //exporta o express com as configuracoes feitas