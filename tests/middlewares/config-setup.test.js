const { config } = require('../../middlewares/config-setup');
const { handler } = require('../../index');
/* eslint-disable */ 

describe('middlewares/config-setup.js', () =>{
  test("Debe retornar un objeto", async() =>{
      const re = await config()
      expect(typeof re === 'object').toBe(true)
  });

  test("Debe estar definido el atributo before", async() =>{
    const re = await config()
    expect(re.before).toBeDefined()
  });

  test("Debe retornar true la función asincrona before", async() =>{
    const re = await config()
    const next = (() =>{ return true;});
    const before = await re.before(handler,next);
    expect(before).toBe(true)
  });

  test("La configuración debe estar inyectada y debe ser un objecto", async() =>{
    const re = await config()
    const next = (() =>{ return true;});
    const before = await re.before(handler,next);
    expect(typeof handler.config === 'object').toBe(true)
  });


});
