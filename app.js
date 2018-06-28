var http = require('http'); // importa o modulo http

http
    .createServer((req,res) => res.end("Flw Valeu!"))//Cria o servidor e trabalha a requisição e resposta
    .listen(3000,()=>console.log('Servidor escutando porta 3000!!'));//Diz qual porta o servidor escutar