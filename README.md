# 🛍️ Front-End - *Vitto Store*

Este é o front-end da aplicação **Vitto Store**, desenvolvido com **HTML, CSS e JavaScript** puro. Ele é responsável por exibir os produtos fornecidos pela API externa **FakeStore**, permitir a adição de produtos ao carrinho e interagir com a API interna (backend) para finalizar os pedidos.

---

## 🌐 Tecnologias Utilizadas

- **HTML5**  
- **CSS3**  
- **JavaScript (ES6)**  
- **FakeStore API** (https://fakestoreapi.com)  
- **Docker** (para containerização)

---

## ⚙️ Pré-requisitos

Para executar o front-end localmente, é necessário ter:

- [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/)  

---

## ▶️ Executando com Docker

Para executar, basta ir no terminal e ditar o comando:

Constução da Imagem Docker - 
  ```bash
  docker build -t loja-frontend .
  ```
Rodar o container - 
```bash
  docker run -p 8080:80 loja-frontend
```

---

##  🔗 Integrações

📦 API Externa: FakeStore API
URL: https://fakestoreapi.com/products

Uso: listagem dos produtos no front-end

---

## 📊 Diagrama da Arquitetura

  [ FakeStore API ] ---> [ Front-End (HTML/CSS/JS) ] ---> [ Vitto Store API (FastAPI) ] ---> [ SQLite DB ]

  
