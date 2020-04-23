const { response } = require('../util/common');

/* eslint-disable */ 
 
module.exports.config = async () => { 

    // logica para obtener parametros
    // Por ejemplo, si guardamos parametros en aws parameter store 
    // la logica para obtenerlos se pondría aqui, por eso es asyncrona la función

    return Object.freeze({
        response,
        text: 'hola'
        // Otras configuración estaticas o dinamicas pueden ir aquí
        
    });
};