// Añadir nuevo elemento a la lista
function addElement() {
   const newElement = document.createElement('li')
   const text = document.createTextNode('Oso')
   newElement.appendChild(text);
   document.getElementById('elementList').appendChild(newElement)
}

// Insertar elemento en la segunda posición de la lista
function insertElement() {
   const newElement = document.createElement('li')
   const text = document.createTextNode('Elefante')
   newElement.appendChild(text)
   const childElement = document.querySelector('li:nth-child(2)')
   document.getElementById('elementList').insertBefore(newElement, childElement)
}

// Actualizar el segundo elemento de la lista
function replaceElement() {
   const text = document.createTextNode('Délfin')
   const childElement = document.querySelector('li:nth-child(2)')
   if(childElement){
      childElement.textContent = ''
      childElement.appendChild(text)
   }else{
      alert('No existe ningún animal en la posición solicitada')
   }
}

// Borrar elemento
function removeElement() {
   const childElement = document.querySelector('li:nth-child(2)')
   if(childElement){
      // secondParagraph.textContent = ''
      childElement.remove()
   }else{
      alert('No existe un elemento en la posición solicitada')
   }
}

// clona la estrctura entera de la lista actual
function cloneList() {
   const listContent = document.getElementById('elementList')
   const listElements = listContent.querySelectorAll('li')
   
   // recoremos con un foreach el array de los elementos li
   listElements.forEach(function (listElem) {
      // guardamos cada elemento li dentro de "clonedElem"
      const clonedElem = listElem.cloneNode(true)
      // añadimos a la lista inicial los elementos clonados
      listContent.appendChild(clonedElem)
   })
}

function createSubList() {
   const childElement = document.querySelector('li:nth-child(1)')

   if(childElement){
      const subList = document.createElement('ul')
      const sublistElem = document.createElement('li')
      const text = document.createTextNode('SalvajeDom')
      sublistElem.appendChild(text)
      subList.appendChild(sublistElem)
      childElement.appendChild(subList)
      
   }else{
      alert('No existe un elemento en la posición solicitada')
   }
}

function createSubListInnerHtml() {
   const childElement = document.querySelector('li:nth-child(1)');

   if (childElement) {
      const subListHtml = '<ul><li>SalvajeInner</li></ul>';
      childElement.innerHTML += subListHtml;
   } else {
      alert('No existe un elemento en la posición solicitada');
   }
}