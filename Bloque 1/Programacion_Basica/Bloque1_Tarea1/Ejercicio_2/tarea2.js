// Almacena en un array los números 7,8,2,9,10. Calcular la suma 
// de los números mayores de 8..

// definimos array y iniciamos variable 'suma'
let array = [7, 8, 2, 9, 10]
let sum = 0

// recorremos con el bucle for el array - si se cumple la condición del if
// se suman los números
for (let i = 0; i < array.length; i++) {
   if(array[i] > 8 ){
      sum += array[i]
   }
}

// sacamos por pantalla la suma 
alert(`La suma de los números mayores que 8 es: ${sum}`)

