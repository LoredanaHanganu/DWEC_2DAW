// colcar el focus en el campo con el id 'name' del formulario
document.getElementById('name').focus()

// función que establece el límte máximo de carácteres permitido en el textarea
function setTextareaChars(maxChar) {
   // almacenar el valor del campo textarea
   const textArea = document.getElementById('textarea').value
   if (textArea.length >= maxChar) {
      return false
   } else {
      return true
   }
}

// función para mostrar en el formulario una imagen subida desde el ordenador 
function previewImage(event) {
   // instancia de FileReader - Api que permite leer datos de archivos locales y mostrarlos en el navegador
   const picUpload = new FileReader()
   picUpload.onload = function () {
      // acceder al elemento en donde vamos a cargar la imagen
      const output = document.getElementById('outputImg')
      // en el source del elemento al que accedimos guardamos el archivo
      output.src = picUpload.result
   }
   // leemos el primer archivo seleccionado 
   picUpload.readAsDataURL(event.target.files[0])
}


// función - evento onchange 
function selectOption() {
   // accedemos al select con las funciones del DOM
   const optionList = document.getElementById('hobby')
   // sacamos el valor del texto de la opcion seleccionada
   const selectedValue = optionList.options[optionList.selectedIndex].text
   // usando el array 'options' sacamos el total de opciones del desplegable usando la propiedad length - array.length
   const optionCount = optionList.options.length

   alert(`La longitud de la lista es: ${optionCount}\nEl ínidice selccionado es: ${optionList.selectedIndex}\nEl valor del índice es: ${selectedValue}`)

}

// función para guardar los datos introducidos en los campos del formulario
function saveLocalStorage() {
   // guardamos en formData los valores de cada campo del formulario accediendo a ellos con las funcionalidades del DOM
   const formData = {
      name: document.getElementById('name').value,
      surname: document.getElementById('surname').value,
      phone: document.getElementById('phone').value,
      idNum: document.getElementById('idNum').value,
      age: document.getElementById('age').value,
      textarea: document.getElementById('textarea').value
   }

   // guardamos el valor del 'checkbox' a la vez que comprobamos si está o no marcado
   formData.ads = document.querySelector('input[type="checkbox"]:checked') ? 'checked' : 'unchecked'

   // guardamos el valor del 'radio-botton' a la vez que comprobamos si está o no marcado
   formData.genre = document.querySelector('input[name="genre"]:checked') ? 'checked' : 'unchecked'

   // accedemos al select - y a la opcion seleccionada 'selectedIndex' y la guardamos
   const optionList = document.getElementById('hobby')
   formData.hobby = optionList.options[optionList.selectedIndex].text

   // guardamos en el localStorage del navegador el formData en forma de JSON
   localStorage.setItem('formData', JSON.stringify(formData))
}

// función para validar el número de teléfono
function validatePhone() {
   const phoneNum = document.getElementById('phone').value
   // comprobamos que el input no contenga otra cosa que números y no más, ni menos de 9
   if (!/^\d{9}$/.test(phoneNum)) {
      return false;
   }
   return true;
}

// función que comprueba si el campo DNI está cumplimentado/vacío
function requiredIdNum() {
   const fieldIdNum = document.getElementById('idNum').value
   console.log(fieldIdNum)

   // si la longitud del valor -'length === 0' devolvemos true y el campo está vacío - else devolvemos false - el campo está cumplimentado
   if (fieldIdNum.length === 0) {
      return true
   } else {
      return false
   }

}

// evento onclick que guarda los cambios que hayamos hecho en los campos del formulario
function saveChanges(event) {
   event.preventDefault()

   // si esta funcíon devuelve true - llamando a la función de guardado - guardamos el número de teléfono
   if (validatePhone()) {
      saveLocalStorage()

   } else { // sino sacamos un alert y reseteamos el valor del campo
      alert('El número de teléfono proporcionado no es correcto')
      document.getElementById('phone').value = ''
   }

   // si el campo DNI está cumplimentado guardamos el valor sino avisamos al usuario
   if(requiredIdNum()){
      alert('El campo DNI debe cumplimentarse')
   }else{
      saveLocalStorage()
   }
}

// reseteamos todos los campos del formulario inclusive la imagen
function resetChanges() {
   document.getElementById('formRegister').reset()
   document.getElementById('outputImg').src = " "
}

