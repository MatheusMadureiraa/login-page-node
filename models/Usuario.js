const { connect } = require('../database.js');
const Logger = require('../logs/logger.js');

class Usuario {
    constructor({ user, password }) {
        this.user = user;
        this.password = password;
    }

    validar() {
        if (!this.user || !this.password) {
            throw new Error("Usuário e senha são obrigatórios.");
        }
    }

    async salvar() {
        try {
            this.validar();
            const { db, client } = await connect();

            const result = await db.collection("usuarios").insertOne({
                user: this.user,
                password: this.password
            });

            client.close();
            return result;
        } catch (error) {
            Logger.log("[USUARIO]: Erro ao salvar usuário: " + error);
            return null;
        }
    }

    static async buscarPorCredenciais(user, password) {
        try {
            const { db, client } = await connect();
            const usuario = await db.collection("usuarios").findOne({ user, password });

            client.close();
            return usuario;
        } catch (error) {
            Logger.log("[USUARIO]: Erro ao buscar usuário: " + error);
            return null;
        }
    }

    static async listarTodos() {
        try {
            const { db, client } = await connect();
            const usuarios = await db.collection("usuarios").find().toArray();

            client.close();
            return usuarios;
        } catch (error) {
            Logger.log("[USUARIO]: Erro ao listar usuários: " + error);
            return [];
        }
    }
}

module.exports = Usuario;
