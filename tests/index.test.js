const lambdaTester = require('lambda-tester');
const { handler } = require('../index');

/* 
  Tenemos que emular las variables de lambda y 
  otras dependencias (a esto le llaman mocking :P)

*/
let event = null;


describe('index.js', () => {
  test('Probamos un nombre de usuario correcto', () => {
    event = {
      username: 'fedemzcor',
    };

    return lambdaTester(handler)
      .event(event)
      .expectResult((result, additional) => {
        expect(result.code).toEqual('ok');
        expect(result.httpCode).toEqual(200);
      });
  });


  test('Probamos un nombre de usuario mal escrito', () => {
    event = {
      username: 'fedemzcor--*',
    };

    return lambdaTester(handler)
      .event(event)
      .expectResult((result, additional) => {
        expect(result.code).toEqual('err_schema');
      });
  });
});
