const { response } = require('../util/common');
const aws = require('aws-sdk');
/* eslint-disable */ 
 
if (process.env.ENV === 'local') {
    require('dotenv').config(); //eslint-disable-line
    
  // Credenciales compartidas de ambiente local, puede variar segun las tuyas
  
    const credentials = new aws.SharedIniFileCredentials({ profile: 'totalcloud-dev' });
    aws.config.update({ region: 'us-east-1', credentials });
}

const ssm = new aws.SSM(); // Instancia para usar el servicio de parameter store de AWS

module.exports.config = async () => { 

    // logica para obtener parametros
    // Por ejemplo, si guardamos parametros en aws parameter store 
    // la logica para obtenerlos se pondría aqui, por eso es asyncrona la función

    return Object.freeze({
        response,
        aws: {
            ssm // Aquí guardamos una instancia de un servicio de AWS
        }
        // Otras configuración estaticas o dinamicas pueden ir aquí
        
    });
};