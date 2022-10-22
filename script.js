document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#button').addEventListener('click', manejadorClick);
});

function manejadorClick() {
  const nombre = prompt('Escribe tu nombre');
  const mensaje = document.getElementById('mensaje-bienvenida');
  mensaje.innerText = 'Bienvenido ' + nombre;
}

function ocultarMostrar() {
  const elemento = document.getElementById('contenido');
  if (elemento.style.display === 'none') {
    elemento.style.display = 'block';
  } else {
    elemento.style.display = 'none';
  }
}

function initAlpine() {

  const suma = function (a,b) {
    return a + b;
  }

  return {
    open: true,
    nombre: '',
    mostrarAlerta() {
      alert('Bienvenido');
    },
    preguntarPorElNombre() {
      this.nombre = prompt('¿Cuál es tu nombre?');
    },
    suma,
  }
}