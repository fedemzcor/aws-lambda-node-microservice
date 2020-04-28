// en local instala esta dependencia como dev, en producción no la vas a ocupar
const aws = require('aws-sdk'); //eslint-disable-line
const log4js = require('log4js');
const { response } = require('../util/common');


// Si el ambiente es local, se van a usar las variables del archivo .env

if (process.env.ENV === 'local') {
    require('dotenv').config(); //eslint-disable-line

  // Credenciales compartidas de ambiente local, puede variar segun las tuyas

  const credentials = new aws.SharedIniFileCredentials({ profile: 'gospik-prod' });
  aws.config.update({ region: 'us-east-1', credentials });
}

const logger = log4js.getLogger();
logger.level = 'debug';
// logger.debug("Some debug messages");
const ssm = new aws.SSM(); // Instancia para usar el servicio de parameter store de AWS
const dynamoDB = new aws.DynamoDB.DocumentClient({ apiVersion: '2012-10-08' });


// logica para obtener otros parametros
// Por ejemplo, si guardamos parametros en aws parameter store
// la logica para obtenerlos se pondría aqui, y debe ser una función asincrona

module.exports.config = async () => Object.freeze({ // Hacemos el objeto inmutable
  response,
  logger,
  appData: {
    dynamoTable: process.env.DIALOG_TABLE,
  },
  aws: {
    dynamoDB,
    ssm, /*
            Aquí guardamos una instancia de un servicio de AWS,
            podriamos enviar toda la clase aws pero mejor solo indicamos los servicios que
            realmente vamos a usar para no tener que cargarle toda la marrana.
        */

  },
  // Otras configuración estaticas o dinamicas pueden ir aquí

});
