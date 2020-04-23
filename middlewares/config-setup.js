const { config } = require('../config');

/* eslint-disable */ 

module.exports.config = () => ({
  before: async (handler, next) => {
    handler.config = await config();
    return next();
  },
  onError: (handler, next) =>{

    // haz algo si ocurrio un error
    return next();


  }
  
});
