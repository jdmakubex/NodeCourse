const { response, request } = require ('express');
const bcryptjs = require ('bcryptjs');



const Usuario = require('../models/usuario');

const usuariosGet = (req = request, res = response) => {

    const {q, nombre = 'No Name', apikey, page=1, limit} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPost = async(req, res) => {    

    const { nombre,correo, password, rol } = req.body;
    const usuario = new Usuario( { nombre, correo, password, rol } );

    


    //Encriptarla constraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );

    //

    await usuario.save();

    res.json({
        msg: 'post API - controlador',
        usuario
    });
}

const usuariosPut =  async(req, res = response) => {

    const {id} = req.params;
    const {password,google, correo, ...resto } =req.body;

    //TODO validar contra base de datos
    if ( password ) {
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'put API - controlador',
        usuario
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

const usuariosDelete =  (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    });
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}