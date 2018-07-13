var express = require('express'); // importa modulo do express
var app = express(); //executa o modulo do express
var consign = require('consign');//modulo que cuidara da importacao das dependencias para nossa app.
var bodyParse = require('body-parser');//modulo que tornar possível recuperar os dados do body do request.

app.use(express.static('./static')); //carrega a pasta static como conteudo estatico no express.
app.use(bodyParse.json()); // configurando o express para utilizar o 

app.set('secret','parangaricotirrimirruaro');

consign({cwd:'app'})//Executa o consign setando como pasta raiz a pasta app
    .include('models')//Inclui a pasta comm os models configurados para o mongodb
    .then('api')//Inclui a pasta api como dependência
    .then('routes/auth.js')
    .then('routes')//Inclui a pasta routes como dependência, mas depois da inclusão da pasta anterior(no caso api)
    .into(app);//diz para o consig a onde ele deve incluir essas dependências, no caso na variável app(express)

module.exports = app; //exporta o express com as configuracoes feitas