const prompt = require('prompt-sync')();
console.log("Esta es una calculadora que se ejecuta en la consola");
let msj1 = prompt("Ingrese numero A: ");
let nro1 = parseFloat(msj1);
let msj2 = prompt("Ingrese numero B: ");
let nro2 = parseFloat(msj2);
let operacion = prompt("ingrese la operacion que desea (suma, resta, division, multiplicacion)");
let resultado 

switch(operacion){
    case "suma": {
       resultado = nro1 + nro2;
       console.log(resultado);
    } break;

    case "resta": {
       resultado = nro1 - nro2;
       console.log(resultado);
    } break;

    case "multiplicacion": {
       resultado = nro1 * nro2;
       console.log(resultado);
    } break;

    case "division": {
      if (nro2 !== 0) {
          resultado = nro1 / nro2;
          console.log(resultado);
      } else {
          console.log("Error: No se puede dividir por cero");
      }
  } break;

  default: {
      console.log("Operación no válida");
  } break;
}