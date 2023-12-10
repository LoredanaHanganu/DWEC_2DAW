// Agregar un escuchador de eventos al objeto global ('load') que ejecutará la función addClick cuando la página se cargue
addEventListener('load', addClick, false)

// Definir la función addClick
function addClick() {
  // Iterar dos veces (para dos enlaces)
  for (let i = 1; i < 3; i++) {
    // Obtener el elemento de enlace con ID 'link1' o 'link2'
    const htmlLink = document.getElementById('link' + i)

    // Agregar un escuchador de eventos ('click') a cada enlace que ejecutará la función clickLink
    htmlLink.addEventListener('click', clickLink, false)
  }
}

// Definir la función clickLink que manejará el evento de clic en los enlaces
function clickLink(event) {
  // Prevenir el comportamiento predeterminado del enlace
  event.preventDefault()

  // Obtener la URL del atributo 'href' del enlace
  const url = event.target.getAttribute('href')

  // Obtener el atributo 'data-target' para así obtener el Id del div donde se mostrará cada enlace
  const targetDivId = event.target.getAttribute('data-target')

  // Llamar a la función loadPage con la URL y el ID del div de destino
  loadPage(url, targetDivId)
}

// Declarar la variable ajaxObject para que sea accesible en todo el ámbito
let ajaxObject

// Definir la función loadPage que realizará una solicitud Ajax y llamará a la función processEvents cuando cambie el estado
function loadPage(url, targetDivId) {
  // Crear un nuevo objeto XMLHttpRequest
  ajaxObject = new XMLHttpRequest()

  // Configurar el evento que manejará los cambios en el estado de la solicitud Ajax
  ajaxObject.onreadystatechange = function () {
    processEvents(targetDivId)
    if (targetDivId === "aboutUs") {
    document.getElementById('aboutUs').style.visibility = 'visible'
    } 
  }

  // Configurar la solicitud Ajax (GET) con la URL proporcionada
  ajaxObject.open('GET', url, true)

  // Enviar la solicitud Ajax
  ajaxObject.send()
}

// Definir la función processEvents que actualizará el contenido del div de destino con la respuesta de la solicitud Ajax
function processEvents(targetDivId) {
  // Obtener el div de destino con el ID proporcionado
  const targetDiv = document.getElementById(targetDivId)

  // Verificar si la solicitud Ajax se ha completado
  if (ajaxObject.readyState == 4) {
    // Actualizar el contenido del div de destino con la respuesta de la solicitud Ajax
    targetDiv.innerHTML = ajaxObject.responseText
  } else {
    // Si la solicitud Ajax aún está en curso, mostrar un mensaje de carga en el div de destino
    targetDiv.innerHTML = 'Cargando...'
  }
}
