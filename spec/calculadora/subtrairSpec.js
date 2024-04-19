describe('Suite de testes de subtração', () => {

    var Calculadora = require('../../src/js/calculadora')

    it('deve retornar 5 para valores 8 e 3', () => {
        expect(Calculadora.calcular(8,3, '-')).toEqual(5);
    });

    it('deve retornar 5 para valores 8 e 3 em formato texto', () => {
        expect(Calculadora.calcular('8', '3', '-')).toEqual(5)
    });

    it('deve retornar 4 para os valores 5.5 e 1.5', () => {
         expect(Calculadora.calcular(5.5, 1.5, '-')).toEqual(4);
         expect(Calculadora.calcular('5.5', '1.5', '-')).toEqual(4);
    });

    it('deve retornar 0 quando o numero 1 for invalido', () => {
        expect(Calculadora.calcular(undefined, 10, '-')).toEqual(0);
    });

    it('deve retornar 0 quando o numero 2 for invalido', () => {
        expect(Calculadora.calcular(10, undefined, '-')).toEqual(0);
    });

});