// Mostrar en pantalla un documento que nos muestre:
// La URL del documento actual.
// El pathname de la página (corresponde a la cadena que sigue al nombre del
// servidor).
// El protocolo utilizado por la página web.
// Debéis insertar también un botón para que al pinchar sobre él se cargue la página de
// Google

// iniciamos una referencia del objeto location para poder acceder a sus métodos
const loc = document.location

// función que escribe en un documento los detalles de la página que sacamos con los métodos de 'location'
function getPageDetails () {
   document.write(`<p>La URL del documento actual es: </p>${loc.href} <br> ` )
   document.write(`<p>El pathname de la página es: </p> ${loc.pathname} <br> `)
   document.write(`<p>El protocolo utilizado por la página es: </p> ${loc.protocol}  `)
}