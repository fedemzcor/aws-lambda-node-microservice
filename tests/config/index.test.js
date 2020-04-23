const { config } = require('../../config');

/* eslint-disable */ 
 
describe('config/index.js', () =>{
    test("Debe retornar un objeto", async() =>{
        const re = await config()
        expect(typeof re === 'object').toBe(true)
    })
});