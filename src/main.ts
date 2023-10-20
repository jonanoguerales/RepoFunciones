import "./style.css";

let contador: number = 0;

function reset() {
  contador = 0;
  pintarContador();
}

function siguiente() {
  contador++;
  pintarContador();
}
function atras() {
  if (contador != 0) {
    contador--;
    pintarContador();
  }
}

function ingresar() {
  const ingresarButton = document.getElementById("numeroInput");

  if (
    ingresarButton !== null &&
    ingresarButton !== undefined &&
    ingresarButton instanceof HTMLInputElement
  ) {
    contador = parseInt(ingresarButton.value);
    pintarContador();
  } else {
    console.error("No se encontro el elemento ingresar");
  }
}

const pintarContador = () => {
  const mostrarNumero = document.querySelector(".numero-turno");

  if (
    mostrarNumero !== null &&
    mostrarNumero !== undefined &&
    mostrarNumero instanceof HTMLHeadingElement
  ) {
    mostrarNumero.textContent = contador.toString().padStart(2, "0");
  } else {
    console.error("No se encontro el elemento numero-turno");
  }
};

const eventos = () => {
  const botonReset = document.querySelector(".reset");
  if (
    botonReset !== null &&
    botonReset !== undefined &&
    botonReset instanceof HTMLElement
  ) {
    botonReset.addEventListener("click", reset);
  } else {
    console.error("No se encontro el elemento reset");
  }

  const botonSiguiente = document.querySelector(".siguiente");
  if (
    botonSiguiente !== null &&
    botonSiguiente !== undefined &&
    botonSiguiente instanceof HTMLElement
  ) {
    botonSiguiente.addEventListener("click", siguiente);
  } else {
    console.error("No se encontro el elemento siguiente");
  }

  const botonAtras = document.querySelector(".atras");
  if (
    botonAtras !== null &&
    botonAtras !== undefined &&
    botonAtras instanceof HTMLElement
  ) {
    botonAtras.addEventListener("click", atras);
  } else {
    console.error("No se encontro el elemento atras");
  }

  const ingresarButton = document.getElementById("ingresar");

  if (
    ingresarButton !== null &&
    ingresarButton !== undefined &&
    ingresarButton instanceof HTMLElement
  ) {
    ingresarButton.addEventListener("click", ingresar);
  } else {
    console.error("No se encontro el elemento ingresar");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  pintarContador();
  eventos();
});

