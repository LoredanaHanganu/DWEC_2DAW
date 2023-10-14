// Introducir un mes y decir a qué estación pertenece:
//  Ej: Dime un mes: enero
//  Estamos en Invierno
// (Nota: No hace falta ninguna comprobación. Los meses
// diciembre,enero,febrero serán invierno, marzo,abril y mayo serán primavera,
// junio,julio y agosto serán verano y septiembre,octubre y noviembre será
// otoño). 

// if( mes == "diciembre" || mes == "enero" || mes == "febrero"){
//    alert("Estamos en invierno")
// }else if(mes == "marzo" || mes == "abril" || mes == "mayo"){
//    alert("Estamos en primavera")
// }else if(mes == "junio" || mes == "julio" || mes == "agosto"){
//    alert("Estamos en verano")
// }else if(mes == "septiembre" || mes == "octubre" || mes == "noviembre"){
//    alert("Estamos en otoño")
// }

// le pedimos al usuario que introduzca un mes
let mes = prompt("Introduce un mes y te digo la estación: ")
mes = mes.toLowerCase()

// definimos en arrays los meses incluidos en cada temporada
let invierno = ["diciembre", "enero", "febrero"];
let primavera = ["marzo", "abril", "mayo"];
let verano = ["junio", "julio", "agosto"];
let otonyo = ["septiembre", "octubre", "noviembre"];

// comprobamos a qué temprada pertenece el mes introducido
if(invierno.includes(mes)){
   alert("Estamos en invierno")
}else if(primavera.includes(mes)){
   alert("Estamos en primavera")
}else if(verano.includes(mes)){
   alert("Estamos en verano")
}else if(otonyo.includes(mes)){
   alert("Estamos en otonyo")
}else{
   alert("No has introducido un mes válido")
}