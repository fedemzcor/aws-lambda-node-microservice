const joi = require('@hapi/joi');

module.exports.validateSchema = () => ({


  before: (handler, next) => {
    // haz algo al principio
    const schema = joi.object({
      username: joi.string()
        .alphanum()
        .min(3)
        .max(10)
        .required(),
    });

    const { error } = schema.validate(handler.event);

    if (typeof error === 'object') {
      return handler.callback(null, handler.config.response(400, 'err', error.message));
    }
    return next();
  },

  after: (handler, next) => {
    // haz algo despues
    const schema = joi.object({
      httpCode: joi.number().integer()
        .min(200)
        .max(521)
        .required(),
      code: joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9_]{2,20}$')),
      description: joi.string()
      .min(10)
      .max(100)
      .required(),
    });

    const { error } = schema.validate(handler.response);
   
    if (typeof error === 'object') {
      return handler.callback(null, handler.config.response(400, 'err_schema', error.message));
    }
    return next()
  },


  /* eslint-disable */ 
  onError: (handler, next) =>{
  // haz algo si ocurrio un error

    return next();
  }
  
});
