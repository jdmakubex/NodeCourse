const { response, request } = require('express');
const jwt = require('jsonwebtoken');

/**
 * Desde el postman en el delete, enviamos en header key: x-tokeb y su valor,
 * por lo que esta vez, ya no recibiremos los datos del body, si no del header, como se muestra en la siguiente funcion
 */
const validarJWT = (req = request, res = response, next) => {

    const token = req.header('x-token');

    if ( !token ){
        return res.status(401).json({
            msg: 'No hay roken en la petición'
        });
    }

    try {
        next();
    } catch (error){
        console.log(error);
        res.status(401).json({
            msg: 'token no valido'
        })

    }

    
    



}


module.exports = {
    validarJWT
}
