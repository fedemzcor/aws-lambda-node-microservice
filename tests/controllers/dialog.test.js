const { handler } = require('../../index');
const { getDialogs } = require('../../controllers/dialog')
const { config } = require('../../config');

describe('controllers/dialog.js', () =>{
  test("Debe retornar un objeto", async() =>{
    
    handler.callback = ((nullParam, data) => { return data; });
    handler.event = {};
    // Inyectamos la configuración
    handler.config = await config();

    const gD = await getDialogs(handler);
    
    expect(typeof gD === 'object').toBe(true)
  });

  test("Debe retornar status 200", async() =>{
    
    handler.callback = ((nullParam, data) => { return data; });
    handler.event = {};
    // Inyectamos la configuración
    handler.config = await config();

    const gD = await getDialogs(handler);
    
    expect(gD.statusCode).toEqual(200)
    expect(gD.body.code).toEqual('ok')
  });

  test("Debe retornar error en el controlador", async() =>{
    
    handler.callback = ((nullParam, data) => { return data; });
    handler.event = {};
    // Inyectamos la configuración
    handler.config = await config();
    handler.config.appData.dynamoTable = "OTHER"

    const gD = await getDialogs(handler);
    expect(gD.body.code).toEqual('err_controller');

  });

});