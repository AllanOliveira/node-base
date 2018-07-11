module.exports = app => {
    var api = app.api.fotos;//recupera de do express a api  
    
    app.route('/v1/fotos') //seta a rota
       .get(api.listar)// seta o que fazer quando utilizar o verbo get
       .post(api.incluir);// seta o que fazer quando utilizar o verbo post
     
    app.route('/v1/fotos/:id') //seta a rota 
       .get(api.buscaPorId)// seta o que fazer quando utilizar o verbo get
       .delete(api.removePorId)// seta o que fazer quando utilizar o verbo delete
       .put(api.atualiza);// seta o que fazer quando utilizar o verbo put
    }   