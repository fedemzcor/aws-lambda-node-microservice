const lambdaTester = require('lambda-tester');
const { handler } = require('../index');

/* 
  Tenemos que emular las variables de lambda y 
  otras dependencias (a esto le llaman mocking :P)

*/


describe('index.js', () => {
  test('Probamos un body correcto', () => {

    return lambdaTester(handler)
      .event({})
      .expectResult((result, additional) => {
        expect(result.body.code).toEqual('ok');
        expect(result.statusCode).toEqual(200);
      });
  });


  test('Debe retornar un objeto', () => {

    return lambdaTester(handler)
      .event({})
      .expectResult((result, additional) => {
        expect(typeof result.body.data).toEqual('object');
      });
  });
});
