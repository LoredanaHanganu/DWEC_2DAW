function soloNum(event) {
   // Obtener el código de la tecla pulsada
   const caracter = event.keyCode || event.charCode
   // guardamos en una constante el caracter pulsado 
   const caracterPulsado = String.fromCharCode(caracter)
   
   // si los códigos ASCII son menores de 48 o mayores de 57 no son números, lo que hará que el if nos devuleva un false además de hacer un event.preventDefault(), que hará que si lo que estuvieramos escribiendo no es un número no se escriba en el input del HTML además de un alert que avisa de la tecla pulsada
   if (caracter < 48 || caracter > 57) {
      event.preventDefault()
      alert(`Presionaste la tecla ${ caracterPulsado }` )
      return false
   }

   return true
}


// "0" tiene un código de tecla de 48.
// "1" tiene un código de tecla de 49.
// "2" tiene un código de tecla de 50.
// "3" tiene un código de tecla de 51.
// "4" tiene un código de tecla de 52.
// "5" tiene un código de tecla de 53.
// "6" tiene un código de tecla de 54.
// "7" tiene un código de tecla de 55.
// "8" tiene un código de tecla de 56.
// "9" tiene un código de tecla de 57.