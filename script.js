document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#button').addEventListener('click', manejadorClick);
});

function manejadorClick() {
  const nombre = prompt('Escribe tu nombre');
  const mensaje = document.getElementById('mensaje-bienvenida');
  mensaje.innerText = 'Bienvenido ' + nombre;
}