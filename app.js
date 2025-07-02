const express = require('express');
const path = require('path');
const http = require('http');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();

// Controller do usuario que comunica com: model -> database
const usuarioController = require('./controllers/usuarioController');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
    secret: 'segredo_super_secreto',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 } // 1min maximo
}));

function checkLogin(req, res, next) {
    if (req.session.logado) {
        next();
    } else {
        res.redirect('/login');
    }
}

// ROTAS - agora utilizando database
app.get('/', checkLogin, usuarioController.listarUsuarios);
app.get('/login', (req, res) => res.render('login'));
app.post('/login', usuarioController.login);
app.get('/logout', usuarioController.logout);
app.post('/usuario_post', usuarioController.cadastrar);

http.createServer(app).listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
