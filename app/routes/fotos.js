module.exports = app => {
    var api = app.api.fotos;//recupera de do express a api  
    
    app.route('/v1/fotos')
       .get(api.listar)
       .post(api.incluir);
     
    app.route('/v1/fotos/:id')
       .get(api.buscaPorId)// Seta uma rota de get no express que irá utilizar a funcação listar da api
       .delete(api.removePorId)
       .put(api.atualiza);
    }   