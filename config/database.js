module.exports = (uri) => { //recebemos a uri para manter a url de conexão dinâmica
    
    var mongoose = require('mongoose');//invoca o modulo do mongoose

    mongoose.connect('mongodb://'+uri,{ useNewUrlParser: true });//cria a conexão

    //seta um evento para a conexão para realizar um ação assim que a conexão for estabelecida
    mongoose.connection.on('connected',()=>console.log('Conectado ao MongoDB!'));

    //seta um evento para a conexão reaqlizar uma ação sempre que houver um erro com a conexão
    mongoose.connection.on('error', error => console.log('Erro na conexão: '+ error));

    //seta um evento para a conexão reaqlizar uma ação sempre for desconectada
    mongoose.connection.on('disconected', () => console.log('Desconectado do MongoDB'));

    //Fecha a conexão com o banco toda vez que a aplicação for terminada
    process.on('SIGINT',()=>{
        mongoose.connection.close(()=>{
            console.log('Aplicação terminada, conexão fechada!');
            process.exit(0);
        });
    });
}