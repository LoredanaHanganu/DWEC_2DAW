window.onload = function() {
   const paragraph = document.getElementById("changeSize")

   // función para aumentar el tamaño del párrafo
   paragraph.addEventListener("mouseover", function(event) {
      event.target.style.fontSize = "16pt"
   })

   // función para restaurar el tamaño del párrafo
   paragraph.addEventListener("mouseout", function(event) {
      event.target.style.fontSize = "12pt"
   })
}