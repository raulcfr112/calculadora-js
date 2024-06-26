describe('Suite de testes de adição', () => {

    var Calculadora = require('../../src/js/calculadora')

    it('deve returnar 5 para 2 e 3', () => {
        expect(Calculadora.calcular(2,3,'+')).toEqual(5);
    });

    it('deve retornar 6 para 9 e -3 no formato texto', () => {
        expect(Calculadora.calcular('9', '-3','+')).toEqual(6);
    });

    it('deve retornar 3.5 para 1.5 e 3', () => {
        expect(Calculadora.calcular(1.5, 3,'+')).toEqual(4.5);
    });

    it('deve retornar 0 quando valor 1 não for numerico', () => {
        expect(Calculadora.calcular(undefined, 10,'+')).toEqual(0)
    });

    it('deve retornar 0 quando valor 2 não for numerico', () => {
        expect(Calculadora.calcular(10, undefined,'+')).toEqual(0)
    });

});