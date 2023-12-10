const btnSum = document.getElementById('sumNum')
btnSum.addEventListener('click', sumNumbers, true)

function sumNumbers(event) {

    event.preventDefault()
    const resultElement = document.getElementById('result')
    const input1 = document.getElementById('inputOne')
    const input2 = document.getElementById('inputTwo')

    // Realizar la solicitud AJAX al programa PHP
    const ajaxObject = new XMLHttpRequest()
    ajaxObject.onreadystatechange = function () {
        if (ajaxObject.readyState == 4 && ajaxObject.status == 200) {
            // Agregar el contenido al elemento HTML
            resultElement.innerHTML = ajaxObject.responseText
            resultElement.style.visibility = 'visible'
        } else {
            // Sacamos el codigo de error por consola en caso de que lo hubiera
            console.error('Error en la solicitud. Estado:', ajaxObject.readyState, 'Código de estado:', ajaxObject.status)
        }
    }

    // Configurar la solicitud AJAX
    ajaxObject.open('POST', 'sum.php?num1=' + input1.value + '&num2=' + input2.value, true)
    // Establecer el encabezado para indicar que estás enviando datos codificados
    ajaxObject.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    ajaxObject.send()
}
