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
            // Agregar el contenido directo al elemento HTML
            resultElement.innerHTML = ajaxObject.responseText
            resultElement.style.visibility = 'visible'
        }
    }

    const params = 'num1=' + input1.value + '&num2=' + input2.value

    ajaxObject.open('GET', 'sum.php?'+params, true)

    // Establecer el encabezado para indicar que estás enviando datos codificados
    ajaxObject.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    // enviar la solicitud
    ajaxObject.send(params)
}

