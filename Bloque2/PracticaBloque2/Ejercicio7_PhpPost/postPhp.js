// Agregar un escuchador de eventos al objeto global ('load') - ejecuta la funcíon que se le da como parámetro
addEventListener('load', getServerDateTime, false)

// Función global que utiliza ajax para ejecutar un script php que saca la hora actual
function getServerDateTime() {
   // Inicializar objeto ajax
   const ajaxObject = new XMLHttpRequest()

   // Función anonima que se ejecuta al cambiar el estado del objeto Ajax
   ajaxObject.onreadystatechange = function () {
      if (ajaxObject.readyState == 4 && ajaxObject.status == 200) {
         // Actualizar el contenido del div con la fecha y hora del servidor
         document.getElementById('currentDate').innerHTML = ajaxObject.responseText
      }else {
         // Sacamos el codigo de error por consola en caso de que lo hubiera
         console.error('Error en la solicitud. Estado:', ajaxObject.readyState, 'Código de estado:', ajaxObject.status)
      }
   }

   // Configurar la solicitud de Ajax con la ruta del script php 
   ajaxObject.open('POST', 'datePhp.php', true)
   // Enviar la solicitud Ajax
   ajaxObject.send()
}

// Actualizar la hora cada 1 segundo (1000 milisegundos)
setInterval(getServerDateTime, 1000)

