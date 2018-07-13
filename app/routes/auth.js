module.exports = app => {
    let api = app.api.auth;
    app.post('/login',api.login)
    app.use('/*',api.validaToken);
}