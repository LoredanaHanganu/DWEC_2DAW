function clicBoton () {

   // seleccionamos todos los elementos del DOM que tangan la misma clase
   const botones = document.querySelectorAll('.btn')

   // a cada botón le asignamos un event listener que hará que al clicarlo nos muestre un alert con el botón clicado
   botones.forEach(boton => {
      boton.addEventListener('click', () => {
         // sacamos el valor de lo que hay dentro de las etiquetas <button>
         const valorBoton = boton.textContent
         alert(`Has pulsado el  ${valorBoton} `)
      }) 
   })
}

// esperamos que se carguen los elementos del DOM para ejecutar la función 
window.onload = clicBoton