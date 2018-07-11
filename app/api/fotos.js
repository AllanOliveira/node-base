var api = {};

api.listar = (req,res)=>{
    let fotos = [
        {_id:01,titulo:"Leão",url:"http://www.fundosanimais.com/Minis/leoes.jpg"},
        {_id:02,titulo:"Águia",url:"http://www.fundosanimais.com/Minis/aterragem-aguia.jpg"}
    ];
    res.json(fotos);
}


module.exports = api;