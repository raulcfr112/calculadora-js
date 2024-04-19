var Calculadora = {
    calcular: function (num1, num2, operacao) {
        
        var resultado;
        
        if(isNaN(num1) || isNaN(num2)){
            return 0;
        }
        
        resultado = eval(num1 + operacao + num2);
        
        if(resultado == 'Infinity'){
            return 'Erro'
        }
        
        return resultado;
        
    }
};

if (typeof module !== 'undefined'
    && typeof module.exports !== 'undefined') {
    module.exports = Calculadora;
}