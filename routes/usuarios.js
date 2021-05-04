//Realizar un desestructuracion para sacar Router de express
const {Router} =require('express');

const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } = require('../controller/usuarios.controlador');

const rutas=Router();

rutas.get('/',usuariosGet);
rutas.put('/',usuariosPut)
rutas.post('/',usuariosPost)
rutas.delete('/',usuariosDelete)

module.exports=rutas;