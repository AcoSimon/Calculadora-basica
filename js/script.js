console.log('Calculadora:');


// Panel numerico:
let e0 = document.getElementById('0');
let e1 = document.getElementById('1');
let e2 = document.getElementById('2');
let e3 = document.getElementById('3');
let e4 = document.getElementById('4');
let e5 = document.getElementById('5');
let e6 = document.getElementById('6');
let e7 = document.getElementById('7');
let e8 = document.getElementById('8');
let e9 = document.getElementById('9');


// Operadores:


// Funciones:
function suma(x, y) {
    let resultado = parseFloat(x) + parseFloat(y);
    return resultado;
}

function resta(x, y) {
    let resultado = parseFloat(x) - parseFloat(y);
    return resultado;
}

function multiplicacion(x, y) {
    let resultado = parseFloat(x) * parseFloat(y);
    return resultado;
}

function division(x, y) {
    let resultado = parseFloat(x) / parseFloat(y);
    return resultado;
}

function raiz(x) {
    let resultado = Math.sqrt(x);
    return resultado;
}

function potencia(x) {
    let resultado = parseFloat(x)*parseFloat(x);
    return  resultado;
}

function porcentaje(x, porcentaje) {
    let multiplicacion = parseFloat(x) * porcentaje;
    let dividir = multiplicacion / 100;
    return dividir;
}

function modulo(x, y) {
    let modulo = parseFloat(x) % parseFloat(y) ;
    return resultado;
}




function escribir(){


}