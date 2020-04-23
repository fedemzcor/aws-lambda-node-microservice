const middy = require('middy');
const { validateSchema } = require('./middlewares/validate-schema');
const { config } = require('./middlewares/config-setup');


/* eslint-disable */ 
 
// Le decimos que la función sera asincrona, entonces va implicito 
// que va a retornar una promesa

const handler = middy(async (event, context) => {

  // Toda tu logica aquí y luego retornamos una respuesta
  function callSomeController() {

  }


  // Ejemplo de respuesta, se envia primero al middleware
  handler.response = handler.config.response(200, 'ok', 'Se ha creado una instancias de ec2 correctamente');
  
  // Se retorna despues que la valido el middleware
  return handler.response;
});

// Mandamos llamar a los middlewares empezando por el de la configuración

handler.use(validateSchema()).use(config());

// Podríamos llamar mas si quisieramos
// handler.use(validateSchema(Config)).use(OtroMiddleware).use(OtroMiddleware)



module.exports = { handler };
