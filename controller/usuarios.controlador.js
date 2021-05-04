//Desestructuracion del response
const { response } = require('express');

const usuariosGet = (req, res = response) => {
    //res.send('SERVIDOR REST');
    res.json({
        mensaje: 'GET API CONTROLADOR'
    });
}

const usuariosPut = (req, res) => {
    res.json({
        mensaje: 'PUT API CONTROLADOR'
    });
}
const usuariosPost = (req, res) => {
    //const body=req.body
    const { nombre, ci } = req.body;
    res.json({
        mensaje: 'POST API CONTROLADOR',
        nombre,
        ci
    });
}
const usuariosDelete = (req, res) => {
    res.json({
        mensaje: 'DELETE API CONTROLADOR'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}