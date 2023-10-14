// Añadir párrafo
function addParagraph() {
   const newParagraph = document.createElement('p')
   const text = document.createTextNode('Párrafo añadido.')
   newParagraph.appendChild(text);
   document.getElementsByClassName('paragraph')[0].appendChild(newParagraph)
}

// Insertar párrafo en la segunda posición dentro del contenedor
function insertParagraph() {
   const newParagraph = document.createElement('p')
   const text = document.createTextNode('Párrafo insertado')
   newParagraph.appendChild(text)
   const secondParagraph = document.querySelector('p:nth-child(2)')
   document.getElementsByClassName('paragraph')[0].insertBefore(newParagraph, secondParagraph)
}

// Actualizar párrafo en la segunda posición del contenedor
function replaceParagraph() {
   const text = document.createTextNode('Párrafo reemplazado')
   const secondParagraph = document.querySelector('p:nth-child(2)')
   if(secondParagraph){
      secondParagraph.textContent = ''
      secondParagraph.appendChild(text)
   }else{
      alert('No existe un párrafo para poder reemplazarlo')
   }
}

// Borrar párrafo - borra el párrafo que está en la segunda posición dentro del contenedor 
function removeParagraph() {
   const secondParagraph = document.querySelector('p:nth-child(2)')
   if(secondParagraph){
      // secondParagraph.textContent = ''
      secondParagraph.remove()
   }else{
      alert('No existe un párrafo para poder borrarlo')
   }
}

// clona la estrctura entera del contenedor actual
function cloneDiv() {
   const divContent = document.getElementsByClassName('paragraph')[0]
   const divClone = divContent.cloneNode(true)

   divContent.appendChild(divClone)

}