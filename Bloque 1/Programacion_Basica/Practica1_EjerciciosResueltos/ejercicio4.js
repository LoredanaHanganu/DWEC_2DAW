let values = [true, 5, false, "hello", "bye", 2]

// Cuál de los 2 elemntos de texto es mayor
let result = values[3]>values[4]
 if(values[3]>values[4]){
   alert("El texto "+ values[3] + " es mayor que el texto " + values[4])
 }else{
   alert("El texto "+ values[4] + " es mayor que el texto " + values[3])
 }

 //Utilizando los valores booleanos, determinar los operadores necesarios 
 // para obtener un resultado true y otro false

let valueOne = values[0]
let valueTwo = values[2]

// obtener true
result = valueOne || valueTwo
alert("Condición para obtener 'true': " + result)

// obtener false
result = valueOne && valueTwo
alert("Condición para obtener 'false': " + result)

 // determinar el resultado de las cinco operaciones matematicas realizadas 
 // con los dos elementos númericos

 let numOne = values[1]
 let numTwo = values[5]

 let sum = numOne + numTwo
 alert("La suma de "+ numOne + " + " + numTwo +" es: " + sum)

 let substract = numOne - numTwo
 alert("La resta de "+ numOne + " - " + numTwo +" es: " + substract)

 let divide = numOne / numTwo
 alert("La división de "+ numOne + " / " + numTwo +" es: " + divide)

 let multiply = numOne * numTwo
 alert("La multiplicación de "+ numOne + " * " + numTwo +" es: " + multiply)

 let rest = numOne % numTwo
 alert("El resto de "+ numOne + " % " + numTwo +" es: " + rest)


