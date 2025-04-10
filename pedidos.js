const API_PEDIDOS = "http://127.0.0.1:8000/pedidos";

function carregarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const lista = document.getElementById("carrinho");
    lista.innerHTML = "";

    if (carrinho.length === 0) {
        lista.innerHTML = "<p>Seu carrinho está vazio.</p>";
        return;
    }

    carrinho.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${item.nome} - R$${item.preco} (x${item.quantidade})
            <button onclick="removerDoCarrinho(${index})">❌</button>
        `;
        lista.appendChild(li);
    });
}

function removerDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    carregarCarrinho();
}

document.getElementById("finalizarPedido").addEventListener("click", () => {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    if (carrinho.length === 0) {
        alert("Carrinho vazio!");
        return;
    }

    fetch(API_PEDIDOS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pedidos: carrinho })
    })
    .then(res => res.json())
    .then(data => {
        alert("Pedido realizado com sucesso!");
        localStorage.removeItem("carrinho");
        carregarCarrinho();
    })
    .catch(error => console.error("Erro ao enviar pedido:", error));
});

carregarCarrinho();
