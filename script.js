

document.getElementById("colorButton").addEventListener("click", function() {
    // Generar un color aleatorio en formato hexadecimal
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Cambiar el color de fondo del cuerpo del documento
    document.body.style.backgroundColor = randomColor;
});