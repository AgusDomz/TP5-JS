"use strict";
function actualizarHora() {

    let fecha = new Date();
    let horas = fecha.getHours();
    let ampm;
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let semanaDia = fecha.getDay();
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let año = fecha.getFullYear();


    let pHoras = document.getElementById('hora');
    let pAmPm = document.getElementById('amPm');
    let pMinutos = document.getElementById('minutos');
    let pSegundos = document.getElementById('segundos');
    let pDiaSemana = document.getElementById('diaSemana');
    let pDia = document.getElementById('diaNumero');
    let pMes = document.getElementById('mes');
    let pAño = document.getElementById('año');

    let semana = [
        'Domingo', 
        'Lunes', 
        'Martes', 
        'Miercoles', 
        'Jueves', 
        'Viernes', 
        'Sabado'
    ];
    
    pDia.textContent = dia;

    pDiaSemana.textContent = semana[semanaDia];

    let meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];

    pMes.textContent = meses[mes];

    pAño.textContent = año;

    pHoras.textContent = horas;

    pMinutos.textContent = minutos.toString().padStart(2, '0');

    pSegundos.textContent = segundos.toString().padStart(2, '0');

    if (horas >= 12) {
        ampm = 'PM'
    } else {
        ampm = 'AM'
    }

    pAmPm.textContent = ampm;

};

    setInterval(actualizarHora, 1000);