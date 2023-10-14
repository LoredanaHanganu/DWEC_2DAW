// Crear una página que contendrá el botón Abrir . Al pinchar sobre el botón debe aparecer
// otra ventana que contendrá, a su vez, el botón Cerrar. Al pinchar sobre él debemos
// volver a la página inicial

// función que crea una ventana emergente
function newWindow() {
   const newWindow = window.open("", "Nueva Ventana", "width=400,height=400" )

   // guardamos en una constante el "html" de la ventana emergente
   const windowContent ="<html><head>" +
   "<link href='tarea5.css' rel='stylesheet' type='text/css' /></head><body>" + 
   "<h1 id='titlePopUp'>Nueva Ventana</h1><br>" +
   "<button id='btnClose' onClick='window.close()'>Cerrar Ventana</button>" + 
   "</body></html>"

   // escribimos el contenido en la ventana emergente
   newWindow.document.write(windowContent)
}





