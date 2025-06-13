const { resultados } = require("../bd/resultados");

class Calculadora{

constructor(){

this.resultados=resultados;

}

suma = (a,b) => {
    let resultado={
        id: this.resultados.length + 1,
        operacion: "suma",
        valor_a: a,
        valor_b:b,
        resultados: a + b
    }
    this.resultados.push(resultado)
    return a+b;

}


resta (a,b) {
    let resultado={
        id: this.resultados.length + 1,
        operacion: "resta",
        valor_a: a,
        valor_b:b,
        resultados: a - b
    }
this.resultados.push(resultado)

    return a-b
}

multiplicacion = (a,b) =>{

    let resultado={
        id: this.resultados.length + 1,
        operacion: "multiplicacion",
        valor_a: a,
        valor_b:b,
        resultados: a * b
    }
    this.resultados.push(resultado)
    return {
        a, b, 
        resultado:a*b
    }

}
getResultados = () => {
    return this.resultados;

    
}
}

module.exports={

    Calculadora
}