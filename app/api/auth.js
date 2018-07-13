module.exports = app => {
    var jwt = require('jsonwebtoken'), //importa o jwt
        mongoose = require('mongoose'); //importa o mongoose

    let api = {},
        model = mongoose.model('Usuario');//recupera o model Usuario

    api.login = (req , res ) => { // acao de login
        
        //buscando no banco de dados o usuário e senha passados
        model.findOne({
            login : req.body.login,
            senha : req.body.senha
        }).then(usuario => {

            if(!usuario){
                console.log('Usuário o senha inválidos!');
                return res.sendStatus(401);
            }

            console.log('Gerando token - usuario:'+usuario);
            /*gerando o token com o usuário e senha retornados do banco e com a palavra 
            secretra guardada no express anteriormente, e configurando o token para expirarar
            em 86400 segungos(24 horas) */
            let token = jwt.sign( {usuario:usuario.login, senha:usuario.senha }, 
                                  app.get('secret'),
                                  {expiresIn:86400});
                                  
            //O token gerado armazenamos no header do response pela chave x-access-token
            res.set('x-access-token',token);
            res.sendStatus(200);

        }, erro => {
            console.log('Usuário ou senha inválidos!');
            res.sendStatus(401);
        });
    }

    api.validaToken = (req , res , next ) => {
        
        let token = req.headers['x-access-token'];

        if(!token){
            console.log('Token invalido!');
            return res.sendStatus(401);
        }

        jwt.verify(token,app.get('secret'),(error,decoded) => {

            if(error){
                console.log('Token invalido!');
                return res.sendStatus(401);
            }

            console.log('Token aceito - Usuario : '+decoded);
            next();
        })
    }

    return api;
}