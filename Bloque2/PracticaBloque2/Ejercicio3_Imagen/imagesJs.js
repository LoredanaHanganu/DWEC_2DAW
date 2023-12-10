// Agregar un escuchador de eventos al objeto global ('load') que ejecutará la función startEventChangeImg cuando la página se cargue
addEventListener('load', startEventChangeImg, false)

function startEventChangeImg() {
  // Obtener el botón de cambio de imagen
  const changeImgBtn = document.getElementById('changeImg')

  // Agregar un evento de clic al botón que ejecutará la función clickBtn cuando se haga clic
  changeImgBtn.addEventListener('click', clickBtn, false)
}

function clickBtn(event) {
  // Prevenir el comportamiento predeterminado del botón (evitar que recargue la página)
  event.preventDefault()

  // Obtener la ruta de la nueva imagen desde la carpeta "assets"
  const newImageSrc = './assets/spring.jpg'

  // Llamar a la función loadNewImg con la ruta de la nueva imagen
  loadNewImg(newImageSrc)
}

function loadNewImg(newImageSrc) {
  // Crear un objeto XMLHttpRequest para la comunicación con el servidor
  const ajaxObject = new XMLHttpRequest()

  // Configurar el evento que manejará los cambios en el estado de la solicitud Ajax
  ajaxObject.onreadystatechange = function () {
    processImgLoad(newImageSrc, ajaxObject)
  }

  // Configurar la solicitud Ajax (GET) con la URL proporcionada (ruta de la nueva imagen)
  ajaxObject.open('GET', newImageSrc, true)

  // Enviar la solicitud Ajax
  ajaxObject.send()
}

function processImgLoad(newImageSrc, ajaxObject) {
  // Obtener el elemento de imagen con el ID 'imageObj'
  const imageElement = document.getElementById('imageObj')

  // Verificar si la solicitud Ajax se ha completado (estado 4 significa que la solicitud está completa)
  if (ajaxObject.readyState == 4) {
    // Actualizar el atributo 'src' de la imagen con la nueva imagen cargada de forma asíncrona
    imageElement.src = ajaxObject.responseURL
  } else {
    // Si la solicitud Ajax aún está en curso, mostrar un mensaje de carga en el elemento de imagen
    imageElement.innerHTML = 'Cargando...'
  }
}


