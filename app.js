const { Calculadora } = require("./clases/calculadora");
const { Pokemon } = require("./clases/pokemon");

console.log("hola mundo")

//let vart const

let name= "sara";
var apellido= "leon";
const edad = 45;
let sueldo = 50.5;
let carreras = {// object
    tsu: "una bombona de servigas",
    ing: "un kilo de fororo ",
    ldc: "matematicas"
}

if (edad>=50){
    console.log("deberias jubilarte");
} else if (edad>=30 && edad<50){

    console.log(`vas por buen camino! para tu cocina ya tienes: ${carreras.tsu} y ${carreras.ing}`);


} else {
    console.log(`estudia mas`)
}
    
const calculadora = new Calculadora();
console.log("Suma de dos numeros: ", calculadora.suma(20,7))
console.log("Resta de dos numeros: ", calculadora.resta(27,12))

const { a, b, resultado} = calculadora.multiplicacion(8,7);
console.log(`las propiedades de la aplicacion son: ${a} ${b} y su resultado es: ${resultado}`)

console.log("Resultados de las operaciones: ");
console.log(calculadora.getResultados());
//metodo find
let lista = calculadora.getResultados();
let busqueda = lista.find((x)=>{

    if(x.id==4){
        return true
    }

    });
    console.log(busqueda)
    //busqueda de indice
    let indice =lista.findIndex((x)=>{
        if(x.id==4)
        {
            return true
        }
    });

    //actualizar datos
    lista[indice]={
        id:4,
        operacion: "division",
        valor_a: 5,
        valor_b: 7,
        resultado: 5/7,
    }

    console.log("indice de la busqueda:",indice,lista)

    //eliminar datod
    let eliminado =lista.splice(0,2);
    console.log("eliminado: ", eliminado)
    console.log("nueva lista: ", lista)

    //reestructuras de arreglo
    let newlist = lista.map((x)=>{
        return{
            id: x.id,
            operacion: x.operacion,
            resultado: x.resultado

        }
    } )
    console.log("nueva lista: ", newlist);

    //pokemon
    let poke = new Pokemon();
    poke.getOne("eevee")

