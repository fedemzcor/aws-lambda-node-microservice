const { response  } = require('../../util/common');

/* eslint-disable */ 
 
describe('util/common.js',  () =>{
  test("Debe retornar un objeto", () =>{
      const re = response(200,'ok','probando');
      expect(typeof re === 'object').toBe(true)
  })

  test("Debe retornar 'ok'", () =>{
    const re = response(200,'ok','probando');
    expect(re.code).toEqual('ok')
  })
});