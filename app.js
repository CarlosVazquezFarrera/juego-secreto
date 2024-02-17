const maximoIntentos = 3;
let intentos = 0;
let numerosGenerados = [];
let numeroSecreto = generarNumeroRandom();

function mensajesIniciales(){
    asignarTexto("h1", "Juego del número");
    asignarTexto("p", "Indica un número del 1 al 10");
}

function disableOrEnabledButon(id){
    const buton = document.getElementById(id);
    buton.disabled = !buton.disabled;
}

function juegoReiniciadoGanado(){
    disableOrEnabledButon('intento');
    disableOrEnabledButon('juegoNuevo');
}

function veriricarIntentoUsuario() {
  const numero = parseInt(inputValue().value);
  if (numero === numeroSecreto) {
    asignarTexto("p", `Felicidades | Intento N ${intentos}`);
    juegoReiniciadoGanado();
  }
  else {
    if (numero < numeroSecreto) {
      asignarTexto("p", "El número secreto es mayor");
    } 
    else {
      asignarTexto("p", "El número secreto es menor");
    }
    intentos++;
    limpiarValorUsuario();
  }
}

function limpiarValorUsuario() {
  const input = inputValue();
  input.value = '';
  input.focus();
}


function inputValue() {
  return document.getElementById("numeroUsuario");
}

function generarNumeroRandom() {
  const numero = Math.floor(Math.random() * maximoIntentos) + 1;

  if (numerosGenerados.length == maximoIntentos) {
    asignarTexto("p", "Ya se sortearon todos los números posibles");
    return;
  }

  console.log(numero)
  if (numerosGenerados.includes(numero)) {
    return generarNumeroRandom();
  }
  else {
    numerosGenerados.push(numero);
    return numero;
  }
}

function asignarTexto(identificador, texto) {
  const element = document.querySelector(identificador);
  element.innerHTML = texto;
}

function reiniciarJuego(){
    limpiarValorUsuario();
    asignarTexto("p", "Indica un número del 1 al 10");
    juegoReiniciadoGanado();
    numeroSecreto = generarNumeroRandom();
    intentos = 1;
}

mensajesIniciales();
