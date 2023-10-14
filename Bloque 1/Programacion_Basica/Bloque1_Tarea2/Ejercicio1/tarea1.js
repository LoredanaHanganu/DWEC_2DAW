// Introducir el precio de un artículo. Calcular el iva y el precio total
// (con el iva incluido) que debe salir redondeado a dos decimales. Debéis 
// utilizar una función.

// Función que devuelve un array con el precio total del artículo y la parte proporcional del IVA
function calculaPrecioTotal(precio, iva) {
   const ivaProporcional = (precio * iva)/100
   const precioTotal =  precio + ivaProporcional

   return {
      precioTotal: precioTotal.toFixed(2), 
      ivaProporcional: ivaProporcional.toFixed(2)
   }
}

// pedimos al usuario que introduzca el precio y el IVA a aplicar del artículo
const precio = parseFloat(prompt("Introduce el precio del artículo:"))
const iva = parseFloat(prompt("Introduce el IVA del artículo:"))

// desestructarmos lo que devuleve la función para poder utilizar los datos en el alert
// usamos la función para calcular dichos datos en función de los datos introducidos por el usuario
const { precioTotal, ivaProporcional } = calculaPrecioTotal(precio, iva)

// sacamos por pantalla la información solicitada
alert(`El coste del IVA del artículo es: ${ivaProporcional}`)
alert(`Precio con IVA incluido ${precioTotal}`)
