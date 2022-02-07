const homeRouter = require('./home');
const registerRouter = require('./register');


function route(app) {
    app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });
    app.use('/register', registerRouter);
    
    app.use('/home', homeRouter);
}

module.exports = route;