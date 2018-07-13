var mongoose = require('mongoose');//importou o mongoose

var model = mongoose.model('Foto');//Recupera o model Foto
var api = {};

//ação de listar da api - ela retorna um json correspondente a lista de fotos
api.listar = (req,res) => {
    model.find( (error,fotos) => {

        if(error){
            console.log(error);
            res.status(500).json(error);
        }

        res.json(fotos);
    });
};

//ação de buscar por id
api.buscaPorId = (req,res) => {
    model
        .findById(req.params.id)
        .then( 
            foto => res.json(foto),
            error => {
                console.log(error.stack);
                res.status(500).json(error)
            }
        );
};

// Ação de remover da api
api.removePorId =(req,res) => {
    model
        .remove({'_id':req.params.id})
        .then(
            ()=> res.sendStatus(200),
            error => {
                console.log(error.stack);
                res.status(500).json(error);
            }
        );
};

//Ação de adicionar
api.incluir = (req,res) => {
    model
        .create(req.body)
        .then( foto => res.json(foto))
        .catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
};

//Ação de atualizar
api.atualiza = (req,res) => {
    model
        .findByIdAndUpdate(req.params.id,req.body,{new:true})
        .then( 
            foto => res.json(foto),
            error => {
                console.log(error.stack);
                res.status(500).json(error);
            }
        );
};

module.exports = api;