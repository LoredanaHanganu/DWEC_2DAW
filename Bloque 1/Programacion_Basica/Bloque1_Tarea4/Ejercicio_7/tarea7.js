function muestraReloj() {
   let fechaHora = new Date()
   let segundos = fechaHora.getSeconds()
   let minutos = fechaHora.getMinutes()
   let horas = fechaHora.getHours()

   if (horas < 10)  { horas = '0' + horas }
   if (minutos < 10)  { minutos = '0' + minutos }
   if (segundos < 10)  { segundos = '0' + segundos }

   document.getElementById("reloj").innerHTML = `${horas}:${minutos}:${segundos}`
}

window.onload = function () {
   alert("Página que contiene un reloj digital")
   setInterval(muestraReloj, 1000)
}

window.addEventListener('beforeunload', (event) =>{
 
   let mensajeAviso = document.getElementById('mensajeAviso')
   
   // mostrar el div - display: none en CSS
   if (mensajeAviso) {
      mensajeAviso.style.display = 'block'
     
     // setTimeout para esconder el div 
     setTimeout( function() {
      mensajeAviso.style.display = 'none'
     }, 1)
   }

   // Devuelve el mensaje, no soportado por los navegadores modernos
   event.returnValue = "Página cancelada"
})




// window.onbeforeunload = function() {
//    let mensajeAviso = document.getElementById('mensajeAviso')
   
//    // mostrar el div - none en CSS
//    if (mensajeAviso) {
//       mensajeAviso.style.display = 'block'
     
//      // setTimeout para esconder el div 
//      setTimeout( function() {
//       mensajeAviso.style.display = 'none'
//      }, 1)
//    }
   
//    // Devuelve el mensaje, no soportado por los navegadores modernos
//    return 'Página cancelada.'
//  }

 // el div sale unos segundos en el chrome/brave  al recargar la página y se queda hasta confirmar, en firefox 