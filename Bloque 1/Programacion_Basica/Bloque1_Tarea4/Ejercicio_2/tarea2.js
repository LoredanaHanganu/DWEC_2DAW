document.addEventListener("DOMContentLoaded", function () {
   const paragraph = document.getElementById("changeSize")

   paragraph.addEventListener("mouseover", function () {
       paragraph.style.fontSize = "16pt"
   })

   paragraph.addEventListener("mouseout", function () {
       paragraph.style.fontSize = "12pt"
   })
})
// cuando el documento se haya cargado "DOMContentLoaded" - seleccionamos el párrafo con getElelemntById y le asiganmos los eventos que hacen cambiar los estilos 