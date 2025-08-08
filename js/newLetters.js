document.addEventListener("DOMContentLoaded", function () {

    var botonMarkets = document.getElementById("botonMarkets");

    var modalMarkets = new bootstrap.Modal
        (document.getElementById("modalMarkets"));

    botonMarkets.addEventListener("click", function () {
        modalMarkets.show()
    })


    var botonDeFiNews = document.getElementById("botonDeFiNews");

    var modalDeFiNews = new bootstrap.Modal
        (document.getElementById("modalDeFiNews"));

    botonDeFiNews.addEventListener("click", function () {
        modalDeFiNews.show()
    })


    var botonMagazine = document.getElementById("botonMagazine");

    var modalMagazine = new bootstrap.Modal
        (document.getElementById("modalMagazine"));

        botonMagazine.addEventListener("click", function () {
            modalMagazine.show()
    })


    var botonOneMinute = document.getElementById("botonOneMinute");

    var modalOneMinute = new bootstrap.Modal
        (document.getElementById("modalOneMinute"));

        botonOneMinute.addEventListener("click", function () {
            modalOneMinute.show()
    })


    var botonWeekRew = document.getElementById("botonWeekRew");

    var modalWeekRew = new bootstrap.Modal
        (document.getElementById("modalWeekRew"));

        botonWeekRew.addEventListener("click", function () {
            modalWeekRew.show()
    })



    var botonCJobs = document.getElementById("botonCJobs");

    var modalCJobs = new bootstrap.Modal
        (document.getElementById("modalCJobs"));

        botonCJobs.addEventListener("click", function () {
            modalCJobs.show()
    })






})