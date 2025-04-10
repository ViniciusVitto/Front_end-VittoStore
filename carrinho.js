document.addEventListener("DOMContentLoaded", () => {
    const carrinhoContainer = document.getElementById("carrinho");
    const finalizarBtn = document.getElementById("finalizar-pedido");

    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    function renderizarCarrinho() {
        carrinhoContainer.innerHTML = "";
        carrinho.forEach((item, index) => {
            const div = document.createElement("div");
            div.className = "item-carrinho";
            div.innerHTML = `
                <p><strong>${item.title}</strong></p>
                <button class="remover" data-index="${index}">Remover</button>
                <hr>
            `;
            carrinhoContainer.appendChild(div);
        });

        document.querySelectorAll(".remover").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const index = e.target.getAttribute("data-index");
                carrinho.splice(index, 1);
                localStorage.setItem("carrinho", JSON.stringify(carrinho));
                renderizarCarrinho();
            });
        });
    }

    finalizarBtn.addEventListener("click", () => {
        alert("Pedido finalizado!");
        localStorage.removeItem("carrinho");
        renderizarCarrinho();
    });

    renderizarCarrinho();
});
