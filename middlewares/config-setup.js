const { config } = require('../config');

/* eslint-disable */ 

module.exports.config = () => ({
  before: async (handler, next) => {
    handler.config = await config();
    return next();
  },
  onError: (handler) =>{

    // haz algo si ocurrio un error
    handler.config.logger.error(__filename, handler.error.message);

    return handler.callback(null, handler.config.response(500, 'err_internal', handler.error.message));

  }
  
});
