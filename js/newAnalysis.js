document.addEventListener("DOMContentLoaded", function () {

    //Declaracion de mi vector que va a llenar el html
    let newsAns =
        [
            {
                id: "Na1",
                nombre: "Technical Analysis",
                descripcion: "Studying price and volume charts to predict future movements.",
                descipcionLarga: "Technical analysis is the art of interpreting price charts and trading volume to anticipate where a crypto asset might be headed next",
                categoria: "1",
                imagen: "img/technical.png",
                valoracion: "9"
            },
            {
                id: "Na2",
                nombre: " On-Chain Analysis",
                descripcion: "Uses data directly from the blockchain to evaluate the health and activity of a network.",
                descipcionLarga: "Users are holding or selling, how many new wallets are being created, or how much is being staked or moved.",
                categoria: "2",
                imagen: "img/onchain.png",
                valoracion: "10"
            },
            {
                id: "Na3",
                nombre: "Portfolio Analysis",
                descripcion: "Risk management and diversification.",
                descipcionLarga: "Asset allocation based on risk profile, Evaluate correlation between assets, ",
                categoria: "2",
                imagen: "img/portfolio.png",
                valoracion: "8"
            },
            {
                id: "Na4",
                nombre: "Fundamental Analysis",
                descripcion: "Evaluates the intrinsic value of a crypto project.",
                descipcionLarga: "Whitepaper (vision, utility, tokenomics),Partnerships and roadmap, On-chain metrics, Number of active addresses, Community and adoption",
                categoria: "3",
                imagen: "img/fundamental.png",
                valoracion: "9"
            }
        ]

    const contenedorNewAns = document.getElementById("contenedor-videojuegos");
    const contenedorModales = document.getElementById("modales-videojuegos");

    function pintarNEWS(filtroCategoria, textoBuscar) {
        if (filtroCategoria === undefined && textoBuscar === undefined) {
            filtroCategoria = 0;
            textoBuscar = "";
        }

        contenedorNewAns.innerHTML = "";
        contenedorModales.innerHTML = "";



        //Filtrar los news analytics 
        let newsAnsFiltrados = [];

        //For para filtrar
        for (let i = 0; i < newsAns.length; i++) {
            const newsAnalysis = newsAns[i];

            const nombrenewsAns = newsAnalysis.nombre.toLowerCase();
            const textoBuscarMinuscula = textoBuscar.toLowerCase();

            const coincideCategoria = (filtroCategoria == 0 || newsAnalysis.categoria == filtroCategoria)
            const coincideTexto = nombrenewsAns.includes(textoBuscarMinuscula);

            if (coincideCategoria && coincideTexto) {
                newsAnsFiltrados.push(newsAnalysis);
            }
        }

        //For para pintar
        for (let i = 0; i < newsAnsFiltrados.length; i++) { //Este el corchete de entrada del for

            let categoria = RetornarCategoria(newsAnsFiltrados[i].categoria);

            const cartaHTML = `
                <div class="card margenesConsola">
                <img src="${newsAnsFiltrados[i].imagen}" class="card-img-top img-news" alt="${newsAnsFiltrados[i].nombre}">
                <div class="card-body">
                    <h5 class="card-title">${newsAnsFiltrados[i].nombre}</h5>
                    <p class="card-text">${newsAnsFiltrados[i].descripcion}</p>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-${newsAnsFiltrados[i].id}"  >INFO</button>
                </div>
            </div>`;

            contenedorNewAns.innerHTML += cartaHTML;

            let estrellasHTML = "";
            let valoracionNA = parseInt(newsAnsFiltrados[i].valoracion);


            for (let j = 1; j <= 10; j++) {
                if (j <= valoracionNA)
                    estrellasHTML += `<i class="fa-solid fa-star fa-beat-fade fa-sm" style="color: #069d40;"></i>`
                else
                    estrellasHTML += `<i class="fa-regular fa-star fa-beat-fade fa-sm" style="color: #069d40;"></i>`;
            }

            const modalHTML =
                `<div class="modal fade" id="modal-${newsAnsFiltrados[i].id}" tabindex="-1" aria-labelledby="label-${newsAnsFiltrados[i].id}" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="label-${newsAnsFiltrados[i].id}">${newsAnsFiltrados[i].nombre}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p> ${newsAnsFiltrados[i].descipcionLarga}</p>
                                <p><strong>${categoria}</strong></p>
                                ${estrellasHTML}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Read</button>
                            </div>
                        </div>
                    </div>
                </div>`

            contenedorModales.innerHTML += modalHTML;

        } //Esta es corchete de salida del for

    }

    pintarNEWS();

    const filtroTexto = document.getElementById("filtroTexto");
    const filtroCategoria = document.getElementById("filtroCategoria");

    filtroTexto.addEventListener("input", function () {
        const filtroTexto = document.getElementById("filtroTexto").value;
        const categoriaSeleccionada = filtroCategoria.value;
        pintarNEWS(categoriaSeleccionada, filtroTexto);
    })

    filtroCategoria.addEventListener("change", function () {
        const filtroTexto = document.getElementById("filtroTexto").value;
        const categoriaSeleccionada = filtroCategoria.value;
        pintarNEWS(categoriaSeleccionada, filtroTexto);
    })


    //Esto de abajo no lo vamos a eliminar    
})


function RetornarCategoria(id) {
    let categoria = "";

    switch (id) {
        case "1":
            categoria = "Short Reading";
            break;
        case "2":
            categoria = "Medium Reading";
            break;
        case "3":
            categoria = "Long Reading";
            break;
    }


    return categoria;
}

