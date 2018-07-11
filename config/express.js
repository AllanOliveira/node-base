var express = require('express'); // importa modulo do express
var app = express(); //executa o modulo do express
var consign = require('consign');

app.use(express.static('./static')); //carrega a pasta static como conteudo estatico no express.

consign({cwd:'app'})
    .include('api')
    .then('routes')
    .into(app);

module.exports = app; //exporta o express com as configuracoes feitas