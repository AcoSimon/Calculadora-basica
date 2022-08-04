console.log('Calculadora:');


// Panel numerico:
let e0 = document.getElementById('0');
let e1 = document.getElementById('1').value;
let e2 = document.getElementById('2').value;
let e3 = document.getElementById('3').value;
let e4 = document.getElementById('4').value;
let e5 = document.getElementById('5').value;
let e6 = document.getElementById('6').value;
let e7 = document.getElementById('7').value;
let e8 = document.getElementById('8').value;
let e9 = document.getElementById('9').value;

/*
git pull
git status
git add .
git commit -m "mensajiño"
 */

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

function raiz() {
    var x = document.getElementById('numero')
    console.log(x)
    let resultado = Math.sqrt(x);
    numero.innerHTML = resultado;    
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

function escribir(x) {
  let dato = document.getElementById(x);
  console.log(dato);
  numero.innerHTMLL += dato
}


function escribir0(){
  numero.innerHTML += '0'
}
function escribir1(){
  numero.innerHTML += '1'
}
function escribir2(){
  numero.innerHTML += '2'
}
function escribir3(){
  numero.innerHTML += '3'
}
function escribir4(){
  numero.innerHTML += '4'
}
function escribir5(){
  numero.innerHTML += '5'
}
function escribir6(){
  numero.innerHTML += '6'
}
function escribir7(){
  numero.innerHTML += '7'
}
function escribir8(){
  numero.innerHTML += '8'
}
function escribir9(){
  numero.innerHTML += '9'
}
function borrar(){
  numero.innerHTML = ''
}