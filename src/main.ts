import "./style.css";

const botonSiguiente = document.querySelector(".siguiente");
const botonAtras = document.querySelector(".atras");
const botonReset = document.querySelector(".reset");
const mostrarNumero = document.querySelector(".numero-turno");
const numeroInput = document.getElementById("numeroInput") as HTMLInputElement;
const ingresarButton = document.getElementById("ingresar");
let contador = 0;

ingresarButton?.addEventListener("click", () => {
    const numero = parseFloat(numeroInput.value); 
    if(mostrarNumero !== null && mostrarNumero !== undefined){
        mostrarNumero.textContent = `${numero}`;
    }
});

if(botonReset instanceof HTMLElement){
    botonReset.addEventListener("click", () => {
        if(mostrarNumero !== null && mostrarNumero !== undefined){
            contador = 0;
            mostrarNumero.textContent = "00";
            numeroInput.value = " ";
        }
})};

if(botonSiguiente instanceof HTMLElement){
    botonSiguiente.addEventListener("click", siguiente);
}
if(botonAtras instanceof HTMLElement){
    botonAtras.addEventListener("click", atras);
}

function siguiente(){
    contador ++;
    if(mostrarNumero !== null && mostrarNumero !== undefined){
        mostrarNumero.textContent = contador.toString().padStart(2, '0');
    }
}
function atras(){
    if(contador != 0){
        contador --;
        if(mostrarNumero !== null && mostrarNumero !== undefined){
            mostrarNumero.textContent = contador.toString().padStart(2, '0');
        }
    }
}

