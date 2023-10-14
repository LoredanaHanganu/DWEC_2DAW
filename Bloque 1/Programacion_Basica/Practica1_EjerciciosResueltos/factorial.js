let num = prompt("Introduce un número y se mostrará su factorial")
let result =1

for(let i=1; i<=num; i++){
   result *= i
}
alert("El factorial del " + num + " es: " + result)
