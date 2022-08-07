console.log('Calculadora: 07/08/2022');
let resultados = [];
let estado = 1;
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Funciones principales:
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
function extraerDato(e){
    // Extraer dato:
/*
    Signatura de la funcion:
                            String -> None
    Funcion:
            Extrae el valor que posea el elemento HTML, en este caso el <input id=screen>, y lo suma al Input-text que se utiliza como display.
            Su lugar de operacion es dentro del formulario "Calculadora."
*/


    document.calculadora.display.value+=e;
}
//------------------------------------------------------------------------
function realizarOperacion() {
    // Entregar historial:
/*
    Signatura de la funcion:
                            
    Funcion:

*/
    document.calculadora.display.value=eval(document.calculadora.display.value);
    // Almacenador: variable global.
    resultados.push(document.calculadora.display.value);
    console.log(resultados);
}
//------------------------------------------------------------------------
function historial() {
  let html = ``;
    for (let i = 0; i < resultados.length; i++) {
        html += resultados[i]+` ; `;
    }
    alert(html);
}
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Funciones auxiliares:
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
function invocarpi(e){
        // Entregar pi:
/*
    Signatura de la funcion:
                            number->none
    Funcion:
            Imprime en pantalla el numero aproximado a π. (Reemplaza lo ingresado)
*/

    document.calculadora.display.value=eval(3.14159265359);

    // Almacenador: variable global.
    resultados.push(document.calculadora.display.value);
    console.log(resultados);
}

function raiz() {
            // Entregar raiz cuadrada: (solo base 2)
/*
    Signatura de la funcion:
                            number->none
    Funcion:
            Imprime en pantalla el numero aproximado a π. (Reemplaza lo ingresado)
*/
    let raiz = Math.sqrt(parseFloat(document.calculadora.display.value));

    document.calculadora.display.value=eval(raiz);
    // Almacenador: variable global.
    resultados.push(document.calculadora.display.value);
    console.log(resultados);
}
function potencia() {
    let potencia2 = parseFloat(document.calculadora.display.value)*parseFloat(document.calculadora.display.value); 
    document.calculadora.display.value=eval(potencia2);
    
    // Almacenador: variable global.
    resultados.push(document.calculadora.display.value);
    console.log(resultados);
}
