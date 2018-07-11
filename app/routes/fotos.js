module.exports = app => {
    var api = app.api.fotos;//recupera de do express a api  
    app.get('/v1/fotos', api.listar);// Seta uma rota de get no express que irá utilizar a funcação listar da api
}