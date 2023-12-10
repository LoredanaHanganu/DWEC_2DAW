// Agregar un evento de carga al hacer clic sobre el botón mostrar XML
document.getElementById('showXML').addEventListener('click', loadXMLDoc)

// Definir la función loadXMLDoc
function loadXMLDoc() {
   // Crear un nuevo objeto XMLHttpRequest
   const ajaxObj = new XMLHttpRequest()
   // Guardar el div en donde queremos visualizar el resultado 
   const result = document.getElementById('divXML')

   // Configurar el evento onload para manejar la respuesta de la solicitud
   ajaxObj.onload = function () {
      // Verificar si la solicitud se completó con éxito (estado 4) y el código de estado es 200 (OK)
      if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {
         // Obtener el documento XML de la respuesta
         const xmlDoc = ajaxObj.responseXML
         result.style.visibility = 'visible'

         // Verificar si xmlDoc es válido
         if (xmlDoc) {
            // Obtener los nodos del XML
            let foodNodes = xmlDoc.getElementsByTagName('food')

            // Iterar sobre cada nodo del XML
            for (let i = 0; i < foodNodes.length; i++) {
               let foodName = foodNodes[i].getElementsByTagName('name')[0].textContent;
               let foodPrice = foodNodes[i].getElementsByTagName('price')[0].textContent;
               let foodDescrip = foodNodes[i].getElementsByTagName('description')[0].textContent;
               let foodCalories = foodNodes[i].getElementsByTagName('calories')[0].textContent;

               // Crear un párrafo para mostrar los datos del XML
               let foodParagraph = document.createElement('p')
               foodParagraph.innerHTML = `
                  <strong>${foodName}</strong><br>
                  Price: ${foodPrice}<br>
                  Description: ${foodDescrip}<br>
                  Calories: ${foodCalories}
               `

               // Agregar el párrafo al resultado
               result.appendChild(foodParagraph)
            }
         } else {
            console.error('El documento XML no es válido')
         }
      } else {
         // En caso de error, mostrar información detallada en la consola
         console.error('Error en la solicitud. Estado:', ajaxObj.readyState, 'Código de estado:', ajaxObj.status)
      }
   }

   // Configurar la solicitud GET con la URL "sampleXML.xml"
   ajaxObj.open("GET", "sampleXML.xml")

   // Enviar la solicitud (en el caso de GET, se envía con null)
   ajaxObj.send()
}







