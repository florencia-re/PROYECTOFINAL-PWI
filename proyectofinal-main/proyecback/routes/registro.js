const express = require('express');
const router = express.Router();
const { register } = require('./../services/registro');
const model = require("./../models/usuario");

const showView = (req, res) => res.render('registro');

const create = async (req, res) => {
    try {
        const { body: usuario } = req;
        const id = await register(usuario);
    
        res.render("registro", {
            message:"Usuario registrado, revise su casilla de correo electrónico",
        });
    } catch (e){
        console.log(e);
    }
};

router.get('/', showView);
router.post('/create', create);

module.exports = router;