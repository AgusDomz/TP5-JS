"use strict";
/*1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que  adivino el numero.
*/
/*
    let inputNum = document.getElementById("inputUsuario")
    .addEventListener('input', leerNum, false);

    let botonTira = document.getElementById('botoncito')
    .addEventListener('click', aleatorio, false);


    let numeroAleatorio;
    let numeroIngresado;

    function leerNum(e) {
        numeroIngresado = parseInt(e.target.value);
    }

    function aleatorio() {

        let i = true;

        while (i) {
            numeroAleatorio = Math.floor(Math.random() * 100);
            if (numeroAleatorio > 0 && numeroAleatorio <= 100) {
                i = false;
            }
        }

        comparacion();
    }

    function comparacion () {
        if (numeroAleatorio === numeroIngresado) {
            alert("SISI");
        } else if (numeroIngresado > numeroAleatorio){
            alert("Te pasaste mi raaaay");
        } else {
            alert("Ta chiquito");
        }
    }
