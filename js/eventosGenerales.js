document.addEventListener("DOMContentLoaded", function () {

    var botonModoOscuro = document.getElementById("botonCambiarModoOscuro")
    var body = document.body;

    if (localStorage.getItem('dark-mode') === "true") {
        body.classList.add('dark-mode')
        botonModoOscuro.textContent = "Bright Mode"
    }

    botonModoOscuro.addEventListener("click", function () {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            botonModoOscuro.textContent = "Bright Mode";
            localStorage.setItem('dark-mode', 'true');
        }
        else {
            botonModoOscuro.textContent = "Dark Mode";
            localStorage.setItem('dark-mode', 'false');
        }

    })

})