"use strict";
/*
2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.

Los métodos que se debe poder utilizar  son:

mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.

Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.

mostrarDatos: devuelve toda la información del objeto.

Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente. 
*/


    class Persona {
        constructor(nombre, edad, DNI, sexo, peso, altura, añoNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.añoNacimiento = añoNacimiento;
    }

    mostrarGeneracion() {
        const generaciones = {
            "Generacion Silent": [1930, 1948],
            "Baby Boom": [1949, 1968],
            "Generacion X": [1969, 1980],
            "Generacion Y": [1981, 1993],
            "Generacion Z": [1994, 2010],
        };

        let perteneceGeneracion = false;
        let rasgoCaracteristico = "";

        for (let generacion in generaciones) {
            const rango = generaciones[generacion];
            if (this.añoNacimiento >= rango[0] && this.añoNacimiento <= rango[1]) {
            perteneceGeneracion = true;
            rasgoCaracteristico = generacion;
            break;
            }
        }

        if (perteneceGeneracion) {
            return `${this.nombre} pertenece a la generación ${rasgoCaracteristico}`;
        } else {
            return `${this.nombre} no pertenece a ninguna generación registrada.`;
        }
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            return `${this.nombre} es mayor de edad.`;
        } else {
            return `${this.nombre} es menor de edad.`;
        }
    }

    mostrarDatos() {
        return `Nombre: ${this.nombre}\n
                Edad: ${this.edad}\n
                DNI: ${this.DNI}\n
                Sexo: ${this.sexo}\n
                Peso: ${this.peso} kg\n
                Altura: ${this.altura} cm\n
                Año de nacimiento: ${this.añoNacimiento}`;
        }
    }

    let formulario = document.getElementById("formPersona");
    let generacionBtn = document.getElementById("btnGeneraciones");
    let mayorBtn = document.getElementById("btnMayorDeEdad");
    let nuevaPersona;

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("inputNombre").value;
        const edad = document.getElementById("inputEdad").value;
        const DNI = document.getElementById("inputDNI").value;
        const sexo = document.getElementById("inputSexo").value;
        const peso = document.getElementById("inputPeso").value;
        const altura = document.getElementById("inputAltura").value;
        const añoNacimiento = document.getElementById("inputNacimiento").value;

    nuevaPersona = new Persona(
        nombre,
        edad,
        DNI,
        sexo,
        peso,
        altura,
        añoNacimiento
        );
    });

    generacionBtn.addEventListener("click", function () {
        alert(nuevaPersona.mostrarGeneracion());
    });

    mayorBtn.addEventListener("click", function () {
        alert(nuevaPersona.esMayorDeEdad());
    });
