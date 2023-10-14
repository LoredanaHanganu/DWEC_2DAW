// Introducir 5 números. Calcular la suma de todos ellos. 
// Decir cuántos de ellos son mayores de 100.

// definir cuantos números vamos na recibir por entrada prompt
let numPrompt = 5
// inicialzar variables necesarias
let sum = 0
let count = 0

//  Bucle 'for' que realiza la suma de los números y además cuenta los números mayores que 100
for (let i = 0; i < numPrompt; i++) {
   const num = parseInt(prompt("Introduce un número: "))
   sum += num
   if (num > 100) {
      count += 1
   }
}

// sacamos por pantalla los resultados 
alert(`La suma de los números introducidos es: ${sum}`)
alert(`Hay ${count} números mayores que 100.`)
