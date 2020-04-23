// en local instala esta dependencia como dev, en producción no la vas a ocupar
const aws = require('aws-sdk'); //eslint-disable-line


const { response } = require('../util/common');


// Si el ambiente es local, se van a usar las variables del archivo .env

if (process.env.ENV === 'local') {
    require('dotenv').config(); //eslint-disable-line

  // Credenciales compartidas de ambiente local, puede variar segun las tuyas

  const credentials = new aws.SharedIniFileCredentials({ profile: 'totalcloud-dev' });
  aws.config.update({ region: 'us-east-1', credentials });
}

const ssm = new aws.SSM(); // Instancia para usar el servicio de parameter store de AWS


// logica para obtener otros parametros
// Por ejemplo, si guardamos parametros en aws parameter store
// la logica para obtenerlos se pondría aqui, y debe ser una función asincrona

module.exports.config = async () => Object.freeze({
  response,
  aws: {
    ssm, // Aquí guardamos una instancia de un servicio de AWS
  },
  // Otras configuración estaticas o dinamicas pueden ir aquí

});
