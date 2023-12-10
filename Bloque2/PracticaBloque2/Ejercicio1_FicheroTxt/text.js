// Agregar un evento de carga al hacer click sobre el botón mostrar texto
document.getElementById('showTxt').addEventListener('click', loadTextDoc)

// Definir la función loadDoc
function loadTextDoc() {
   // Crear un nuevo objeto XMLHttpRequest
   const ajaxObj = new XMLHttpRequest()

   // Configurar el evento onload para manejar la respuesta de la solicitud
   ajaxObj.onload = function () {
      // Verificar si la solicitud se completó con éxito (estado 4) y el código de estado es 200 (OK)
      if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {
         // Actualizar el contenido del elemento con ID "divTxt" con la respuesta del servidor
         document.getElementById("divTxt").innerHTML = ajaxObj.responseText
         document.getElementById("divTxt").style.visibility = 'visible'
         
      } else {
         // En caso de error, mostrar información detallada en la consola
         console.error('Error en la solicitud. Estado:', ajaxObj.readyState, 'Código de estado:', ajaxObj.status)
      }
   }

   // Configurar la solicitud GET asincrona con la URL "ajax_info.txt" 
   ajaxObj.open("GET", "data.txt", true)

   // Enviar la solicitud (en el caso de GET, se envía con null por defecto)
   ajaxObj.send(null)
}
