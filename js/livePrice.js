document.addEventListener("DOMContentLoaded", function () {
    
    async function fetchPrices() {
        const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
        const data = await res.json();

        const priceLive = document.getElementById("priceLive");
        priceLive.innerHTML = ""; // Limpiar contenido anterior

        const createCards = () => {
            return data.map(coin => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
          <img src="${coin.image}" alt="${coin.name}" />
          <h3>${coin.name}</h3>
          <p>$${coin.current_price.toFixed(2)}</p>
        `;
                return card;
            });
        };

        // Añadir dos veces las tarjetas para crear el efecto de scroll infinito
        const cards = [...createCards(), ...createCards()];
        cards.forEach(card => priceLive.appendChild(card));
    }

    fetchPrices();
    setInterval(fetchPrices, 40000); // Actualiza precios cada 10 segundos

})

