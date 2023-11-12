// función para aumentar el tamaño del parrafo
function changeFontSize(eventListener){
   eventListener.style.fontSize = "16pt"
}

// función para disminuir el tamaño del parrafo
function restoreFontSize(eventListener){
   eventListener.style.fontSize = "12pt"
}

// el eventListener hace referencia al elemento HTML que usamos para desencadenar el evento
// de esta forma se podría usar en cualquier elemento que se necesite dentro del html 
// sin cambiar nada del codigo de JavaScript