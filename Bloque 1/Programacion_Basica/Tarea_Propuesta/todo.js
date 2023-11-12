document.addEventListener('DOMContentLoaded', function () {

   document.getElementById('title').focus()

   function requiredTitle() {
      const fieldTaskTitle = document.getElementById('title').value

      console.log('Longitud del título:', fieldTaskTitle.length);
      if (fieldTaskTitle.length === 0) {
         return false
      } else {
         return true
      }
   }

   function handleCheckboxClick(checkboxId) {
      const checkboxes = ['pending', 'inProgress', 'completed'];
      
      checkboxes.forEach(id => {
         const checkbox = document.getElementById(id)
         if (id === checkboxId) {
            // Si es el checkbox clicado, lo dejamos como está
            checkbox.checked = true
         } else {
            // Si no es el checkbox clicado, lo desmarcamos
            checkbox.checked = false
         }
      })
   }
   
   // Añade un evento 'click' a cada checkbox
   document.getElementById('pending').addEventListener('click', () => handleCheckboxClick('pending'))
   document.getElementById('inProgress').addEventListener('click', () => handleCheckboxClick('inProgress'))
   document.getElementById('completed').addEventListener('click', () => handleCheckboxClick('completed'))
   

   
   
   function saveLocalStorage() {
      const formData = {
         title: document.getElementById('title').value,
         description: document.getElementById('description').value,
         date: document.getElementById('date').value,
      }
      
      formData.priority = document.querySelector('input[type="radio"]:checked') ? 'checked' : 'unchecked'
      
      formData.taskState = document.querySelector('input[type="checkbox"]:checked') ? 'checked' : 'unchecked'
      // guardamos en el localStorage del navegador el formData en forma de JSON
      localStorage.setItem('formData', JSON.stringify(formData))
   }
   
   
   const buttonSaveForm = document.getElementById('saveTask')
   buttonSaveForm.addEventListener('click', (e) => {
      console.log("Save button clicked")
      e.preventDefault()

      if (requiredTitle()) {
         saveLocalStorage()
      } else {
         document.getElementById('title').focus()
         // document.getElementById('title').style.border ='1px solid red'
         // document.getElementById('title').style.outline ='1px solid red'
         document.getElementById('title').style.cssText = 'border: 1px solid red; border-radius:5px; outline: 1px solid red; caret-color: red;';

         setTimeout(() => {
            document.getElementById('title').style.cssText = ''; // resetea los estilos a los 2 segundos
         }, 2000);

      }
   })

   const buttonResetForm = document.getElementById('resetFields')
   buttonResetForm.addEventListener('click' , (e) =>{
      e.preventDefault()
      console.log("Reset button clicked")
      document.getElementById('taskForm').reset()
   })

})