describe('Suite de testes de divisão', () => {

    var Calculadora = require('../../src/js/calculadora')

    it('deve retornar 6 para 12 e 2', () => {
        expect(Calculadora.dividir(12,2)).toEqual(6);
    });

    it('deve retornar 2 para 6 e 3 no formato texto', () => {
        expect(Calculadora.dividir('6', '3')).toEqual(2);
    });

    it('deve retornar 1.5 para 4.5 e 3', () => {
        expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
    });

    it('deve retornar erro ao dividir por zero', () => {
        expect(Calculadora.dividir(10,0)).toEqual('Erro');
    });

    it('deve retornar 0 quando valor 1 não for numerico', () => {
        expect(Calculadora.dividir(undefined, 10)).toEqual(0)
    });

    it('deve retornar 0 quando valor 2 não for numerico', () => {
        expect(Calculadora.dividir(10, undefined)).toEqual(0)
    });

});