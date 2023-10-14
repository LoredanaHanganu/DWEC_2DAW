// Introducir un mes y decir a que estación pertenece:
//  Ej: Dime un mes: enero
//  Estamos en Invierno
// (Nota: No hace falta ninguna comprobación. Los meses diciembre,enero,febrero serán
// invierno, marzo,abril y mayo serán primavera, junio,julio y agosto serán verano y
// septiembre,octubre y noviembre será otoño). Utilizar la estructura switch para resolver
// este ejercicio.


const mes = prompt("Introduce un mes y te digo la estación a la que pertenece: ").toLowerCase()

switch (mes) {
   case "diciembre":
   case "enero":
   case "febrero":
      alert("Estamos en Invierno")
      break
      
   case "marzo":
   case "abril":
   case "mayo":
      alert("Estamos en Primavera")
      break  

   case "junio":
   case "julio":
   case "agosto":
      alert("Estamos en Verano")  
      break

   case "septiembre":
   case "octubre":
   case "noviembre":
      alert("Estamos en Otoño")
      break
  
   default: alert("El mes que has introducido no es válido")
      break
}