document.addEventListener("DOMContentLoaded", function(){

    //Declaracion de mi vector que va a llenar el html
    let newNewest =
    [
        {
            id: "NW1",
            nombre: "Trending",
            descripcion: "Crypto trends making headlines right now",
            descipcionLarga :"Explore the latest and most talked-about news in the crypto space—from innovative launches to unexpected market moves. This section keeps you updated on what everyone is buzzing about in the blockchain industry.",
            categoria : "1", 
            imagen: "img/tren.png", 
            valoracion: "10"
        },
        {
            id: "NW2",
            nombre: "MacroEconomics",
            descripcion: "Macroeconomic impact on the crypto world",
            descipcionLarga :"We analyze how global decisions—like interest rates, inflation, or monetary policy—are influencing the behavior of Bitcoin and other cryptocurrencies. A look at the intersection of global economics and digital assets.",
            categoria : "2", 
            imagen: "img/macro.png",
            valoracion: "9"
        },
        {
            id: "NW3",
            nombre: "Finances",
            descripcion: "Financial updates from the crypto ecosystem",
            descipcionLarga :"Stay informed on key financial moves in crypto: institutional investments, mergers, financial regulations, and the growth of products like ETFs or decentralized lending. Everything you need to understand the financial landscape of crypto.",
            categoria : "2", 
            imagen: "img/fin.png",
            valoracion: "10"
        }
    ]

    const contenedorJuegos = document.getElementById("contenedor-videojuegos");
    const contenedorModales = document.getElementById("modales-videojuegos");

    function pintarNEWS(filtroCategoria, textoBuscar)
    {                
        if(filtroCategoria === undefined && textoBuscar=== undefined)
            {
            filtroCategoria = 0;
            textoBuscar = "";
        }

        contenedorJuegos.innerHTML = "";
        contenedorModales.innerHTML = "";

        //Categoria puede 0-Todos 1-Disparos 2-Aventura 3-Deportes
        //Filtrar los juegos
        let newNewestFiltrado = [];

        //For para filtrar
        for (let i= 0; i < newNewest.length; i++)
        {
            const juego = newNewest[i];

            const nNNests = juego.nombre.toLowerCase();
            const textoBuscarMinuscula = textoBuscar.toLowerCase();

            const coincideCategoria = (filtroCategoria == 0 || juego.categoria == filtroCategoria)
            const coincideTexto = nNNests.includes(textoBuscarMinuscula);

            if(coincideCategoria && coincideTexto)
            {
                newNewestFiltrado.push(juego);
            }            
        }
        
        //For para pintar
        for(let i= 0; i < newNewestFiltrado.length; i++)
        { //Este el corchete de entrada del for
    
            let categoria = RetornarCategoria(newNewestFiltrado[i].categoria);
    
            const cartaHTML = `
                <div class="card margenesConsola">
                <img src="${newNewestFiltrado[i].imagen}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${newNewestFiltrado[i].nombre}</h5>
                    <p class="card-text">${newNewestFiltrado[i].descripcion}</p>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-${newNewestFiltrado[i].id}"  >INFO</button>
                </div>
            </div>`;
    
            contenedorJuegos.innerHTML += cartaHTML;
    
            let estrellasHTML = "";
            let valoracionNN = parseInt(newNewestFiltrado[i].valoracion);
            

            for(let j = 1; j <=10; j++){
                if(j<=valoracionNN)
                    estrellasHTML += `<i class="fa-solid fa-star fa-beat-fade fa-sm" style="color: #069d40;"></i>`
                else
                estrellasHTML += `<i class="fa-regular fa-star fa-beat-fade fa-sm" style="color: #069d40;"></i>`;
            }

            const modalHTML = 
                `<div class="modal fade" id="modal-${newNewestFiltrado[i].id}" tabindex="-1" aria-labelledby="label-${newNewestFiltrado[i].id}" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="label-${newNewestFiltrado[i].id}">${newNewestFiltrado[i].nombre}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p> ${newNewestFiltrado[i].descipcionLarga}</p>
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

    filtroTexto.addEventListener("input", function(){
        const filtroTexto = document.getElementById("filtroTexto").value;
        const categoriaSeleccionada = filtroCategoria.value;
        pintarNEWS(categoriaSeleccionada, filtroTexto);
    })

    filtroCategoria.addEventListener("change", function(){
        const filtroTexto = document.getElementById("filtroTexto").value;
        const categoriaSeleccionada = filtroCategoria.value;
        pintarNEWS(categoriaSeleccionada,filtroTexto);
    })


//Esto de abajo no lo vamos a eliminar    
})


function RetornarCategoria(id)
{
    let categoria = "";

    switch(id){
    case "1":
        categoria = "Short Reading";
        break;
    case "2":
        categoria = "Medium Reading";
        break;
}

    return categoria;
}

