module.exports = app => {
    var api = app.api.fotos;
    app.get('/v1/fotos', api.listar);
}