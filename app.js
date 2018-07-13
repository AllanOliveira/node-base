var http = require('http');//importa o modulo http
var app = require('./config/express');//importa o express configurado

//executa nosso arquivo de configuração de database passando a url de conexão
require('./config/database')('localhost:27017/nodelab');

http
    .createServer(app)//Cria um servidor que ira utilizar o express configurado como framework
    .listen(3000,()=>console.log('Servidor escutando porta 3000!!'));//Diz qual porta o servidor escutar