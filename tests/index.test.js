const lambdaTester = require('lambda-tester');
const { handler } = require('../index');

// Emulamos las variables de lambda (a esto le llaman mocking :P)
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
      });
  });

  test('Probamos un nombre de usuario mal escrito', () => {
    event = {
      username: 'fedemzcor--*',
    };

    return lambdaTester(handler)
      .event(event)
      .expectResult((result, additional) => {
        expect(result.code).toEqual('err');
      });
  });
});
