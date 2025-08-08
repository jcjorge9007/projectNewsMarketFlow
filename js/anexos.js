document.addEventListener("DOMContentLoaded", function () {

    fetch("menu.html")
        .then(Response => Response.text())
        .then(data => {
            document.getElementById("menu-placeholder").innerHTML = data;
        })


    fetch("livePrice.html")
        .then(Response => Response.text())
        .then(data => {
            document.getElementById("priceLive-placeholder").innerHTML = data;
        })


    fetch("footer.html")
        .then(Response => Response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
})
