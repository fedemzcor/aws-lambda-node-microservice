const { config } = require('../../config');
const aws = require('aws-sdk'); 
const { response } = require('../../util');

/* eslint-disable */ 
 
describe('config/index.js', () =>{
    test("Debe retornar un objeto", async() =>{
        const re = await config()
        expect(typeof re === 'object').toBe(true)
    })

    test("Debe retornar una instancia del objeto comun de respuesta", async() =>{
        const re = await config();
        expect(re.response === response).toBe(true);
    })

    test("Debe retornar una instancia de AWS.SSM", async() =>{
        const re = await config();

        expect(re.aws.ssm instanceof aws.SSM).toBe(true);
    })
});