//Introducir un número y decir si es par o impar

// pedimos el número con un prompt
let num = parseInt(prompt("Introduce un número para comprobar si es par o no"))

// condición - si al dividir entre 2 el resto es 0 el número es par
if (num%2 == 0){
   alert(`El número ${num} es par`)
}else{
   alert(`El número ${num} es impar`)
}