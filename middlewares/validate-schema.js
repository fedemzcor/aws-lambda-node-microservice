const joi = require('@hapi/joi');

module.exports.validateRequest = () => ({


  before: (handler, next) => {
    // haz algo antes que todo
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
  /* eslint-disable */ 
  onError: (handler, next) =>{
  // haz algo si ocurrio un error

    return next();
  }
  
});
