var api = {};

//ação de listar da api - ela retorna um json correspondente a lista de fotos
api.listar = (req,res)=>{
    let fotos = [
        {_id:01,titulo:"Leão",url:"http://www.fundosanimais.com/Minis/leoes.jpg"},
        {_id:02,titulo:"Águia",url:"http://www.fundosanimais.com/Minis/aterragem-aguia.jpg"}
    ];
    res.json(fotos);
}

// api tem que ser exposta para ser utilizavel
module.exports = api;