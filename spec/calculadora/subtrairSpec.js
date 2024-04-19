describe('Suite de testes de subtração', () => {

    var Calculadora = require('../../src/js/calculadora')

    it('deve retornar 5 para valores 8 e 3', () => {
        expect(Calculadora.subtrair(8,3)).toEqual(5);
    });

    it('deve retornar 5 para valores 8 e 3 em formato texto', () => {
        expect(Calculadora.subtrair('8', '3')).toEqual(5)
    });

    it('deve retornar 4 para os valores 5.5 e 1.5', () => {
         expect(Calculadora.subtrair(5.5, 1.5)).toEqual(4);
         expect(Calculadora.subtrair('5.5', '1.5')).toEqual(4);
    });

    it('deve retornar 0 quando o numero 1 for invalido', () => {
        expect(Calculadora.subtrair(undefined, 10)).toEqual(0);
    });

    it('deve retornar 0 quando o numero 2 for invalido', () => {
        expect(Calculadora.subtrair(10, undefined)).toEqual(0);
    });

});