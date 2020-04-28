const { response  } = require('../../util');

/* eslint-disable */ 
 
describe('util/index.js',  () =>{
  test("Debe retornar un objeto", () =>{
      const re = response(200,'ok','probando');
      expect(typeof re === 'object').toBe(true)
  })

  test("Debe retornar 'ok'", () =>{
    const re = response(200,'ok','probando');
    expect(re.body.code).toEqual('ok')
  })
});