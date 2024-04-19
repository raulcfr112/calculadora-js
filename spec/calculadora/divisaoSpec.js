describe('Suite de testes de divisão', () => {

    var Calculadora = require('../../src/js/calculadora')

    it('deve retornar 6 para 12 e 2', () => {
        expect(Calculadora.calcular(12,2,'/')).toEqual(6);
    });

    it('deve retornar 2 para 6 e 3 no formato texto', () => {
        expect(Calculadora.calcular('6', '3','/')).toEqual(2);
    });

    it('deve retornar 1.5 para 4.5 e 3', () => {
        expect(Calculadora.calcular(4.5, 3,'/')).toEqual(1.5);
    });

    it('deve retornar erro ao dividir por zero', () => {
        expect(Calculadora.calcular(10,0,'/')).toEqual('Erro');
    });

    it('deve retornar 0 quando valor 1 não for numerico', () => {
        expect(Calculadora.calcular(undefined, 10,'/')).toEqual(0)
    });

    it('deve retornar 0 quando valor 2 não for numerico', () => {
        expect(Calculadora.calcular(10, undefined,'/')).toEqual(0)
    });

});