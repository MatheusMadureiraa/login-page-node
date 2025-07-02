const Usuario = require('../models/Usuario');

async function login(req, res) {
    const { user, password } = req.body;
    const usuario = await Usuario.buscarPorCredenciais(user, password);

    // aceita esse para teste
    if (usuario || (user === 'matheus' && password === 'senha')) {
        req.session.logado = true;
        req.session.user = user;
        res.redirect('/');
    } else {
        res.send('Usuário ou senha inválidos. <a href="/login">Tentar de novo</a>');
    }
}

async function logout(req, res) {
    req.session.destroy();
    res.redirect('/login');
}

async function cadastrar(req, res) {
    const { user, password } = req.body;

    try {
        const novoUsuario = new Usuario({ user, password });
        await novoUsuario.salvar();

        res.send('Usuário cadastrado com sucesso. <a href="/">Voltar à lista de usuários</a>');
    } catch (e) {
        res.send('Erro ao cadastrar: ' + e.message);
    }
}

async function listarUsuarios(req, res) {
    const usuarios = await Usuario.listarTodos();
    res.render('index', { usuarios });
}

module.exports = {
    login,
    logout,
    cadastrar,
    listarUsuarios
};
