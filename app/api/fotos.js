var api = {};

var cont = 2;

var fotos = [
    {_id:01,titulo:"Leão",url:"http://www.fundosanimais.com/Minis/leoes.jpg"},
    {_id:02,titulo:"Águia",url:"http://www.fundosanimais.com/Minis/aterragem-aguia.jpg"}
];

//ação de listar da api - ela retorna um json correspondente a lista de fotos
api.listar = (req,res) => res.json(fotos);

api.buscaPorId = 
    (req,res) => res.json(
                    fotos.find(
                        foto => foto._id == req.params.id)
                 );

api.removePorId =
    (req,res) => {
        console.log(req.params.id);
        fotos = fotos.filter(foto => foto._id != req.params.id);
        res.sendStatus(204);
    }

api.incluir = 
    (req,res) => {
        let foto = req.body;

        foto._id = ++cont;
        fotos.push(foto);

        res.json(foto);
    }

api.atualiza =
    (req,res) => {
        let newFoto = req.body;

        let index = fotos.findIndex(
            foto => foto._id == req.params.id
        );

        fotos[index] = newFoto;

        res.sendStatus(200);
    }

// api tem que ser exposta para ser utilizavel
module.exports = api;