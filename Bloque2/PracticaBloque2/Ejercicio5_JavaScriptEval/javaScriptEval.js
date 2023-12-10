const showAlertBtn = document.getElementById('showAlert')
showAlertBtn.addEventListener('click', loadExecuteScript, false)

// Función que ejecuta un script Js con Ajax
function loadExecuteScript() {
   // Inicializar objeto ajax
   const ajaxObject = new XMLHttpRequest()

   // Función anonima que se ejecuta al cambiar el estado del objeto Ajax
   ajaxObject.onreadystatechange = function () {
      if (ajaxObject.readyState == 4 && ajaxObject.status == 200) {
         // Obtener el contenido del script del responseText
         const scriptContent = ajaxObject.responseText
         // Ejecutar el script utilizando eval
         eval(scriptContent)
      } else {
         // Sacamos el codigo de error por consola en caso de que lo hubiera
         console.error('Error en la solicitud. Estado:', ajaxObject.readyState, 'Código de estado:', ajaxObject.status)
      }
   }

   // Configurar la solicitud de Ajax con la ruta del script JS 
   ajaxObject.open('GET', 'script.js', true)
   // Enviar la solicitud Ajax
   ajaxObject.send()
}

