const { create: createPersona } = require("./../models/persona");
const { create: createUser } = require("./../models/usuario");
const { send } = require('./../services/mail')

const sha1 = require('sha1');
const { v4: uid } = require("uuid");

const register = async ({
        nombre,
        apellido,
        email,
        telefono,
        usuario,
        password,
        ciudad
    } = {}) => {
    try {
        const { insertId: idPersona } = await createPersona({
        nombre,
        apellido,
        email,
        telefono,
        ciudad
    });
        const { insertId: idUsuario } = await createUser({
        usuario,
        password: sha1(password),
        idPersona,
        confirmacionCorreo: uid()
    });
    return idUsuario;
    const mailObject = {
            email,
            message: `
                <h2>¡Gracias por registrarte ${nombre} ${apellido}!</h2>
                <h3>No olvides verificar tu cuenta haciendo</h3>
                <a href="">CLICK AQUÍ</a>
            `   
        };
        await send(mailObject);
    } catch (e) {
        console.log(e)
    }
};

module.exports = { register };