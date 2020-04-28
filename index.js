const middy = require('middy');
const { validateSchema } = require('./middlewares/validate-schema');
const { config } = require('./middlewares/config-setup');
const { getDialogs } = require('./controllers/dialog');

/* eslint-disable */ 
 
// Le decimos que la función sera asincrona, entonces va implicito 
// que va a retornar una promesa

const handler = middy(async (event, context) => {

  // Toda la logica esta en la función getDialogs del controlador dialog
 

  // Ejemplo de respuesta, se envia primero al middleware

  handler.response = await getDialogs(handler);

  // handler.config.logger.info(__filename,JSON.stringify(handler.response.body.data));
  
  // Se retorna despues que la valido el middleware
  return handler.response;
});

// Mandamos llamar a los middlewares

handler.use(validateSchema()).use(config());

// Podríamos llamar mas si quisieramos
// handler.use(validateSchema(Config)).use(OtroMiddleware).use(OtroMiddleware)



module.exports = { handler };
