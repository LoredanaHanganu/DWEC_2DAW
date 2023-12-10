// Escuchador de eventos que espera el evento 'load' - llama a la función 'init'
addEventListener('load', init, false)

// Función de inicialización
function init() {
   // Obtener el elemento del botón con el id 'btnShowJson'
   const btnShowJson = document.getElementById('btnShowJson')

   // Agregar un escuchador de eventos de clic al botón, que ejecutará la función 'loadExecuteJson'
   btnShowJson.addEventListener("click", loadExecuteJson, false)
}

// Función para cargar y ejecutar JSON
function loadExecuteJson() {
   // Obtener el elemento donde se mostrará la información JSON
   const showDiv = document.getElementById("showJson")

   // Crear un nuevo objeto XMLHttpRequest para realizar una solicitud asíncrona.
   const ajaxObject = new XMLHttpRequest()

   // Inicializar un objeto vacío para almacenar los datos JSON analizados.
   let dataJson = {}

   // Configurar una función para manejar los cambios de estado de la solicitud.
   ajaxObject.onreadystatechange = () => {
      // Verificar si la solicitud se ha compleatdo con éxito
      if (ajaxObject.status == 200 && ajaxObject.readyState == 4) {
         //  Almacenar el 'responseText'
         dataJson = JSON.parse(ajaxObject.responseText)
         showDiv.style.visibility = 'visible'
      } else {
         // Si la solicitud no se completa mostrar el mensaje de error con el status de la misma
         console.error('Error en la solicitud. Estado:', ajaxObject.readyState, 'Código de estado:', ajaxObject.status)
      }

      // Construir el contenido HTML basado en los datos JSON.
      let result = `<h1 style='margin-bottom:20px; text-align: center; font-size:19px'>AGENDA</h1></ br>`
      Object.entries(dataJson).forEach(([key, value]) => {
         result += `<strong>${key.toUpperCase()}</strong></ br>`
         if (typeof value === "object") {
            Object.entries(value).forEach(([key, value]) => {
               if (typeof value === "object") {
                  result += `<p style='margin: 7px 0px 0px 25px'><strong>${key}</strong></p></ br>`
                  Object.entries(value).forEach(([key, value]) => {
                     result += `<div style='margin: 0px 0px 0px 25px'>${key}: ${value}</div></ br>`
                  })
               } else result += `<div>${key}: ${value}</div></ br>`
            })
         } else result += `  <div>${key}: ${value}</div></ br>`
         result += "<div style='margin: 30px'></div>"
      })

      // Actualizar el contenido HTML mostrando el resultado
      showDiv.innerHTML = result
   }

   // Configurar la solicitud: método GET, URL y asíncrono (true)
   ajaxObject.open('GET', 'addressJson.json', true)

   // Enviar la solicitud
   ajaxObject.send()
}






