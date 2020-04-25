const { validateSchema } = require('../../middlewares/validate-schema');
const { handler } = require('../../index');
const { config } = require('../../config');

/* eslint-disable */ 

describe('middlewares/validate-schema.js', () =>{
  test("Debe retornar un objeto", () =>{
    const re = validateSchema()
    expect(typeof re === 'object').toBe(true)
  });

  test("Debe estar definido el atributo before", () =>{
    const re = validateSchema()
    expect(re.before).toBeDefined()
  });

  test("Deben ser funciones los atributos before y after", () =>{
    const re = validateSchema()
    expect(typeof re.before === 'function').toBe(true)
    expect(typeof re.after === 'function').toBe(true)
  });

  

  test("Debe retornar error al ingresar un username incorrecto", async () =>{
    const re = validateSchema()
    const next = jest.fn();
  
    handler.callback = ((nullParam, data) => { return data; });
    handler.event = {
      username : 'fedemzcor-*'
    }
    // Inyectamos la configuración
    handler.config = await config();

    const before = re.before(handler,next);

    expect(before.code).toEqual('err_schema')
  });

  test("Debe retornar el resultado de la función next al ingresar un username correcto", async () =>{
    const re = validateSchema()
    const next = jest.fn(data => true);
  
    handler.callback = ((nullParam, data) => { return data; });
    handler.event = {
      username : 'fedemzcor'
    }
    // Inyectamos la configuración
    handler.config = await config();

    const after = re.after(handler,next);

    expect(after).toEqual(true)
  });

  
  test("Debe retornar error del esquema al retornar", async () =>{
    const re = validateSchema()
    const next = jest.fn(data => true);
  
    handler.callback = ((nullParam, data) => { return data; });
    handler.response = { httpCode: 700, Code: 'ok' };
    handler.config = await config();

    const after = re.after(handler,next);

    expect(after.code).toEqual('err_schema')
  });

  


});
