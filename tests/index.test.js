const lambdaTester = require('lambda-tester');
const { handler } = require('../index');

/* 
  Tenemos que emular las variables de lambda y 
  otras dependencias (a esto le llaman mocking :P)

*/


describe('index.js', () => {
  test('Probamos un body correcto', () => {
    event = {
       
    };

    return lambdaTester(handler)
      .event(event)
      .expectResult((result, additional) => {
        expect(result.body.code).toEqual('ok');
        expect(result.statusCode).toEqual(200);
      });
  });


  // test('Probamos un nombre de usuario mal escrito', () => {
  //   event = {
  //     body : {
  //       username: 'fedemzcor--*',
  //     }
  //   };

  //   return lambdaTester(handler)
  //     .event(event)
  //     .expectResult((result, additional) => {
  //       expect(result.body.code).toEqual('err_schema');
  //     });
  // });
});
