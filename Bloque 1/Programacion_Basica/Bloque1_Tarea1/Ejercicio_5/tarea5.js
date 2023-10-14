// Introducir el precio de un articulo. Calcular el iva y el precio total
// (con el ivaincluido) que debe salir redondeado a dos decimales.

// pedimos el precio base y el Iva por pantalla
let precio = parseFloat(prompt("Introduce el precio base del producto"))
let iva = parseFloat(prompt("Introduce el IVA del producto"))

// calculamos el Iva 
let ivaProporcional = (precio * iva)/100
// calculamos el precio total
let precioTotal =  precio + ivaProporcional

// sacamos por pantalla el resultado
alert(`El coste del IVA es: ${ivaProporcional.toFixed(2)}`)
alert(`El precio total con Iva incluido es: ${precioTotal.toFixed(2)}`)



