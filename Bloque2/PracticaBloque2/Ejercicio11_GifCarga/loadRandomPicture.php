<?php
// Array de nombres de imágenes
$images = array("img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg", "img10.jpg");

// Atrasar la carga de la imagén en 3 segundos
sleep(3);

// Obtener una imagen aleatoria del array
$randomImg = $images[array_rand($images)];

// Devolver la ruta de la imagen
echo "assets/" . $randomImg;
?>