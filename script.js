document.getElementById('cambiarColor').addEventListener('click', function() {
 // Generar un color aleatorio
 var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
 // Cambiar el color del mensaje
 document.getElementById('mensaje').style.color = randomColor;
});
