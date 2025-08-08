document.addEventListener("DOMContentLoaded", function () {

    var boton = document.getElementById("showInfo");
    
    boton.addEventListener("click", function () {
        var texto = document.getElementById("nameInfo").value;
        var texto1 = document.getElementById("emailInfo").value;
        var texto2 = document.getElementById("phoneInfo").value;
        var texto3 = document.getElementById("memberSelect").value;
        var texto4 = document.getElementById("checkTerminos").value;
        console.log(texto);
        console.log(texto1);
        console.log(texto2);
        console.log(texto3);
        console.log(texto4);
    })

    
})