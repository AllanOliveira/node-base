var express = require('express'); // importa modulo do express
var app = express(); //executa o modulo do express

app.use(express.static('./static')); //carrega a pasta static como conteudo estatico no express.

module.exports = app; //exporta o express com as configuracoes feitas