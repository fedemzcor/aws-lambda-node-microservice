const middy = require('middy');
const { validateRequest } = require('./middlewares/validate-schema');
const { config } = require('./middlewares/config-setup');


/* eslint-disable */ 
 
// Le decimos que la función sera asincrona, entonces va implicito 
// que va a retornar una promesa

const handler = middy(async (event, context) => {

  // Toda tu logica aquí y luego retornamos una respuesta
  function callSomeController() {

  }


  // Ejemplo de respuesta
  return handler.config.response(200, 'ok', 'Se ha creado una instancias de ec2 correctamente');
});

// Mandamos llamar a los middlewares empezando por el de la configuración

handler.use(config()).use(validateRequest());

// Podríamos llamar mas si quisieramos
// handler.use(validateRequest(Config)).use(OtroMiddleware).use(OtroMiddleware)



module.exports = { handler };
