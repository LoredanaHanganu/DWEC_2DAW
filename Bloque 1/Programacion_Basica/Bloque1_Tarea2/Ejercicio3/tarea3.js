// Crea una página con tres botones con el texto Azul,Verde y Rojo. Al pinchar sobre cada
// botón debe cambiar el fondo de la página al color indicado. Utilizaremos el evento
// onclick , en temas posteriores veremos otros eventos.

// creamos una funcion que cambia el color del body
function changeBackgroundColor(color) {
   // seleccionamos el body por su id y le asiganmos la propiedad color al background
   document.getElementById('container').style.backgroundColor = color
}