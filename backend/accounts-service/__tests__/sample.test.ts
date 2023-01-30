import {soma} from './../src/soma';

describe ('testando a função soma', () => {

    it('testando a soma de 1+2, deve ser 3', ()=> {
        const resultado = soma(1,2);
        expect(resultado).toEqual(3)
    })
})