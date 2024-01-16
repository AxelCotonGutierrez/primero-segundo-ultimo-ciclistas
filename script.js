// Axel Cotón Gutiérrez Copyright 2024

document.addEventListener('DOMContentLoaded', () => {
    const preguntaEl = document.getElementById('pregunta');
    const imagenesEl = document.getElementById('imagenes-ciclistas');
    const resultadoEl = document.getElementById('resultado');
    const botones = {
        azul: document.getElementById('boton-azul'),
        rojo: document.getElementById('boton-rojo'),
        verde: document.getElementById('boton-verde')
    };
    const siguientePreguntaBtn = document.getElementById('siguiente-pregunta');

    let respuestaCorrecta;

    function cargarJuego() {
        const ciclistas = ['azul', 'rojo', 'verde'];
        ciclistas.sort(() => Math.random() - 0.5);

        imagenesEl.innerHTML = ciclistas.map(color => `<img src="${color}.png" alt="${color}">`).join('');
        const preguntaAleatoria = ['primero', 'segundo', 'último'][Math.floor(Math.random() * 3)];
        preguntaEl.textContent = `¿Quién llegó ${preguntaAleatoria}?`;
        respuestaCorrecta = ciclistas[preguntaAleatoria === 'primero' ? 0 : preguntaAleatoria === 'segundo' ? 1 : 2];

        resultadoEl.textContent = '';
    }

    Object.values(botones).forEach(boton => {
        boton.addEventListener('click', function() {
            const seleccionUsuario = this.textContent.toLowerCase();
            if (seleccionUsuario === respuestaCorrecta) {
                resultadoEl.textContent = '¡Correcto! Felicitaciones.';
                resultadoEl.style.color = "green";
            } else {
                resultadoEl.textContent = `Incorrecto, el correcto era ${respuestaCorrecta}. ¡Inténtalo de nuevo!`;
                resultadoEl.style.color = "red";
            }
        });
    });

    siguientePreguntaBtn.addEventListener('click', cargarJuego);

    cargarJuego();
});