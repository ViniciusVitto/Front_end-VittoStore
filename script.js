const API_PRODUTOS = "https://fakestoreapi.com/products";

// Buscar produtos da FakeStore API
fetch(API_PRODUTOS)
    .then(res => res.json())
    .then(produtos => {
        const container = document.getElementById("produtos");
        produtos.forEach(produto => {
            let div = document.createElement("div");
            div.classList.add("produto");
            div.innerHTML = `
                <h3>${produto.title}</h3>
                <img src="${produto.image}" width="100">
                <p>Preço: R$${produto.price}</p>
                <button onclick="adicionarAoCarrinho(${produto.id}, '${produto.title}', ${produto.price})">
                    Adicionar
                </button>
            `;
            container.appendChild(div);
        });
    })
    .catch(error => console.error("Erro ao buscar produtos:", error));

// Adicionar produto ao carrinho e salvar no localStorage
function adicionarAoCarrinho(produtoId, nome, preco) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    // Verificar se o item já está no carrinho
    let itemExistente = carrinho.find(item => item.produto_id === produtoId);
    if (itemExistente) {
        itemExistente.quantidade += 1; 
    } else {
        carrinho.push({ produto_id: produtoId, nome, preco, quantidade: 1 });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert(`${nome} adicionado ao carrinho!`);
}
