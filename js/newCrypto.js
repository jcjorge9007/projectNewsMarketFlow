document.addEventListener("DOMContentLoaded", function () {

    //Declaracion de mi vector que va a llenar el html
    let newsCrypto =
        [
            {
                id: "NC1",
                nombre: "Markets",
                descripcion: "Market prices, corrections, blockchain analytics",
                descipcionLarga: "From educational content to price analysis and interviews with key figures — MarketFlowNews and our experienced team of traders help you stay up to speed and give you the edge in Bitcoin and cryptocurrency market.",
                categoria: "1",
                imagen: "img/mark.png",
                valoracion: "10"
            },
            {
                id: "NCS",
                nombre: "Tech & AI",
                descripcion: "Bots, DEX's, Wallets, Hacks",
                descipcionLarga: "When we discuss blockchain technology, we are often talking about a collection of disciplines including cryptography, distributed systems design, economics, game theory and many others. Stay tuned to MarketFlowNews coverage of the technological and social phenomenon of blockchain technology.",
                categoria: "3",
                imagen: "img/tech&.png",
                valoracion: "9"
            },
            {
                id: "NC3",
                nombre: "Business",
                descripcion: "Decentralization, Regulations & Adoptions, ETF's",
                descipcionLarga: "When we talk about the role of Bitcoin (BTC) or blockchain in business, we are talking about either business ventures building blockchain/cryptocurrency systems, products or infrastructure; or the integration and adoption of cryptocurrency in existing enterprises as a supported payment method. Stay tuned as we chronicle blockchain and cryptocurrency’s shifting role in the world of business.",
                categoria: "2",
                imagen: "img/busin.png",
                valoracion: "10"
            },
            {
                id: "NC4",
                nombre: "Policy",
                descripcion: "Regulatory, Jurisdictions",
                descipcionLarga: "Crypto regulation is an umbrella term for the network of laws, statutes and legal practices surrounding the crypto and blockchain industries.",
                categoria: "3",
                imagen: "img/poli.png",
                valoracion: "8"
            }
        ]

    const contenedorCN = document.getElementById("contenedor-videojuegos");
    const contenedorModales = document.getElementById("modales-videojuegos");

    function pintarNEWS (filtroCategoria, textoBuscar) {
        if (filtroCategoria === undefined && textoBuscar === undefined) {
            filtroCategoria = 0;
            textoBuscar = "";
        }

        contenedorCN.innerHTML = "";
        contenedorModales.innerHTML = "";

        
        //Filtrar los news
        let newCRFiltrado = [];

        //For para filtrar
        for (let i = 0; i < newsCrypto.length; i++) {
            const newCR = newsCrypto[i];

            const nombreNewCR = newCR.nombre.toLowerCase();
            const textoBuscarMinuscula = textoBuscar.toLowerCase();

            const coincideCategoria = (filtroCategoria == 0 || newCR.categoria == filtroCategoria)
            const coincideTexto = nombreNewCR.includes(textoBuscarMinuscula);

            if (coincideCategoria && coincideTexto) {
                newCRFiltrado.push(newCR);
            }
        }

        //For para pintar
        for (let i = 0; i < newCRFiltrado.length; i++) { //Este el corchete de entrada del for

            let categoria = RetornarCategoria(newCRFiltrado[i].categoria);

            const cartaHTML = `
                <div class="card margenesConsola">
                <img src="${newCRFiltrado[i].imagen}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${newCRFiltrado[i].nombre}</h5>
                    <p class="card-text">${newCRFiltrado[i].descripcion}</p>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-${newCRFiltrado[i].id}"  >INFO</button>
                </div>
            </div>`;

            contenedorCN.innerHTML += cartaHTML;

            let estrellasHTML = "";
            let valoracionNews = parseInt(newCRFiltrado[i].valoracion);


            for (let j = 1; j <= 10; j++) {
                if (j <= valoracionNews)
                    estrellasHTML += `<i class="fa-solid fa-star fa-beat-fade fa-sm" style="color: #069d40;"></i>`
                else
                estrellasHTML += `<i class="fa-regular fa-star fa-beat-fade fa-sm" style="color: #069d40;"></i>`;
            }

            const modalHTML =
                `<div class="modal fade" id="modal-${newCRFiltrado[i].id}" tabindex="-1" aria-labelledby="label-${newCRFiltrado[i].id}" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="label-${newCRFiltrado[i].id}">${newCRFiltrado[i].nombre}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p> ${newCRFiltrado[i].descipcionLarga}</p>
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
