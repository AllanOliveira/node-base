var mongoose = require('mongoose'); // importa o mongoose

//constrou um schema de acordo com o objeto json passado
var schema = mongoose.Schema(
    {
        titulo:{//nome da propriedade
            type:String,//tipo da propriedade
            require:true//diz de o campo é obrigatório
        },
        url:{
            type:String,
            require:true
        },
        descricao:{
            type:String,
            require:true
        }
    }
);

//importa o schema ao mongoose passa a string Foto como chave para ser recuperada no futuro.
mongoose.model('Foto',schema);