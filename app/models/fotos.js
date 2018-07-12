var mongoose = require('mongoose');

var schema = mongoose.Schema(
    {
        titulo:{
            type:String,
            require:true
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

mongoose.model('Foto',schema);