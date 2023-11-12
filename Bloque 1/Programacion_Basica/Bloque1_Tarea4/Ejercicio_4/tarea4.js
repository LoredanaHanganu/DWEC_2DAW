
window.onload = function() {
   const paragraph = document.getElementById("changeSize")

   
   paragraph.addEventListener("mouseover", function(event) {
      event.target.style.fontSize = "16pt"
   })

  // condición para navegadores antiguos
   if (paragraph.attachEvent) {
      paragraph.attachEvent("mouseout", function() {
         paragraph.style.fontSize = "12pt"
      })
   } else {
      paragraph.addEventListener("mouseout", function(event) {
         event.target.style.fontSize = "12pt"
      })
   }
}
