addEventListener('load', function () {
   const showPicBtn = document.getElementById('showPicBtn')
   const picContainer = document.getElementById('picContainer')
   const gifLoader = document.getElementById('gifLoader')

   showPicBtn.addEventListener('click', function () {
       // Mostrar el load animado antes de cargar la imagen
       gifLoader.style.visibility = 'visible'

       // Realizar la solicitud AJAX al archivo PHP
       const ajaxObject = new XMLHttpRequest()
       ajaxObject.onreadystatechange = function () {
           if (ajaxObject.readyState === 4 && ajaxObject.status === 200) {
               // Ocultar el logo animado después de recibir la imagen
               gifLoader.style.visibility = 'hidden'

               // Mostrar la foto en el contenedor
               picContainer.innerHTML = `<img src="${ajaxObject.responseText}" alt="Foto Aleatoria">`
           }
       }

       ajaxObject.open('GET', 'loadRandomPicture.php', true)
       ajaxObject.send()
   })
})
