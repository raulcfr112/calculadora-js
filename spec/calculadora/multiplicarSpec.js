describe('Suite de testes de multiplicação', () => {

    var Calculadora = require('../../src/js/calculadora')

    it('deve retornar 6 para valores 2 e 3', () => {
        expect(Calculadora.multiplicar(2,3)).toEqual(6);
    });

    it('deve retornar 9 para os valores 3 e 3 em formato texto', () => {
        expect(Calculadora.multiplicar('3','3')).toEqual(9);
    });

    it('deve retornar 4.5 para os valores 1.5 e 3', () => {
        expect(Calculadora.multiplicar(1.5, 3)).toEqual(4.5);
    });

    it('deve retornar 0 quando o numero 1 for invalido', () => {
        expect(Calculadora.multiplicar(undefined, 10)).toEqual(0);
    });

    it('deve retornar 0 quando o numero 2 for invalido', () => {
        expect(Calculadora.multiplicar(10, undefined)).toEqual(0);
    });

});