// Introducir una cadena. Decir la longitud de la cadena. Pasarla a mayúsculas y
// a minúsculas. Mostrar cada palabra de la cadena por separado primero
// normal y después al revés.

// Pedimos al usuario que introduzca un 'string'
let cadena = prompt("Introduce una cadena o frase:")

// Sacamos la longiutd de caracteres del 'String'
document.write(`La cadena tiene una longitud de: ${cadena.length} caracteres <br>`)

// Pasamos el 'String' a minúsculas
document.write(`La cadena en minúsculas: ${cadena.toLowerCase()} <br>`)

// Pasamos el 'String' a mayúsculas
document.write(`La cadena en mayúsculas: ${cadena.toUpperCase()} <br>`)

// Separamos el 'String' por el espacio vacio
let palabra = cadena.split(" ")
document.write("La cadena por separado: <br>")
// Recorremos con un bucle for el array para sacar cada palabra en una línea
for (i in palabra ){
   document.write(`${palabra[i]} <br>`)
}

// cambiamos el orden del array
let palabraReverse = palabra.reverse()
document.write("La cadena por separado y al reves: <br>")
// Recorremos con un bucle for el array para sacar cada palabra en una línea
for (i in palabraReverse ){
   document.write(`${palabraReverse[i]} <br>`)
}




