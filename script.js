const produtos = [
  {
    id: 1,
    nome: "Troca de Tela Samsung S21",
    descricao: "Substituição da tela original com garantia de 90 dias.",
    imagem: "https://cdn.pixabay.com/photo/2014/04/03/10/32/mobile-phone-310831_1280.png",
  },
  {
    id: 2,
    nome: "Carregador Turbo USB-C",
    descricao: "Carregador rápido 25W compatível com diversos modelos.",
    imagem: "https://cdn.pixabay.com/photo/2016/11/29/10/07/adapter-1867284_1280.jpg",
  },
  {
    id: 3,
    nome: "Bateria Original iPhone 11",
    descricao: "Bateria nova original com instalação inclusa.",
    imagem: "https://cdn.pixabay.com/photo/2018/05/08/21/28/battery-3380123_1280.jpg",
  },
];

function renderListaProdutos() {
  const container = document.getElementById("lista-produtos");
  container.innerHTML = produtos
    .map(
      (p) => `
      <div class="produto" onclick="irParaProduto(${p.id})">
        <img src="${p.imagem}" alt="${p.nome}">
        <h3>${p.nome}</h3>
      </div>
    `
    )
    .join("");
}

function irParaProduto(id) {
  window.location.href = `produto.html?id=${id}`;
}

function renderDetalhesProduto() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const produto = produtos.find((p) => p.id === id);

  if (!produto) {
    document.getElementById("detalhes-produto").innerHTML =
      "<p>Produto não encontrado.</p>";
    return;
  }

  document.getElementById("detalhes-produto").innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}" style="width:100%; border-radius:10px;">
    <h2>${produto.nome}</h2>
    <p>${produto.descricao}</p>
    <a class="botao" target="_blank" href="https://wa.me/5511979660222?text=Olá, tenho interesse no produto: ${encodeURIComponent(produto.nome)}">Falar no WhatsApp</a>
  `;
}

function voltar() {
  window.location.href = "index.html";
}