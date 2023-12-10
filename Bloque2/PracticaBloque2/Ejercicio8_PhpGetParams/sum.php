<?php
// Verificar si se han proporcionado los parámetros 'num1' y 'num2' en la orden GET
if (isset($_GET['num1']) && isset($_GET['num2'])) {
    // Obtener los valores de los parámetros
    $num1 = $_GET['num1'];
    $num2 = $_GET['num2'];

    // Verificar si los valores son números
    if (is_numeric($num1) && is_numeric($num2)) {
        // Realizar la suma
        $resultado = $num1 + $num2;

        // Imprimir el resultado directamente en HTML
        echo '<p>Resultado: ' . $resultado . '</p>';
    } else {
        // Si los valores no son números, imprimir un mensaje de error
        echo '<p>Error: Los valores proporcionados no son números</p>';
    }
} else {
    // Si no se proporcionaron los parámetros necesarios, imprimir un mensaje de error
    echo '<p>Error: Se requieren los parámetros "num1" y "num2"</p>';
}
?>