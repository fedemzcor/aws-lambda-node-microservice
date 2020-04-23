const { validateRequest } = require('../../middlewares/validate-schema');
const { handler } = require('../../index');
const { config } = require('../../config');

/* eslint-disable */ 

describe('middlewares/validate-schema.js', () =>{
  test("Debe retornar un objeto", () =>{
    const re = validateRequest()
    expect(typeof re === 'object').toBe(true)
  });

  test("Debe estar definido el atributo before", () =>{
    const re = validateRequest()
    expect(re.before).toBeDefined()
  });

  test("Debe ser una función el atributo before", () =>{
    const re = validateRequest()
    expect(typeof re.before === 'function').toBe(true)
  });

  test("Debe retornar error al ingresar un username incorrecto", async () =>{
    const re = validateRequest()
    const next = jest.fn();
  
    handler.callback = ((nullParam, data) => { return data; });
    handler.event = {
      username : 'fedemzcor-*'
    }
    // Inyectamos la configuración
    handler.config = await config();

    const before = re.before(handler,next);

    expect(before.code).toEqual('err')
  });

  


});
