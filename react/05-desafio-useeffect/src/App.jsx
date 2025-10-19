import React from "react";
import Produto from "./Produto";

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  const [produto, setProduto] = React.useState(null);

  function fetchProd(produto) {
    const prod = produto.toLowerCase();
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${prod}`)
      .then((response) => response.json())
      .then((data) => setProduto(data))
      .catch((err) => {
        console.log("Houve um erro ao dar fetch na api: " + err);
      });
  }

  React.useEffect(() => {
    if (produto !== null) {
      window.localStorage.setItem("produto", produto.nome);
    }
  }, [produto]);

  React.useEffect(() => {
    const produtoSalvo = window.localStorage.getItem("produto");

    if (produtoSalvo !== null) {
      fetchProd(produtoSalvo);
    }
  }, []);

  const buttonStyle = {
    margin: 5
  }

  return (
    <>
      <h1>Produto: {produto !== null ? produto.nome : ""}</h1>
      <button style={buttonStyle} onClick={() => fetchProd("notebook")}>Notebook</button>
      <button style={buttonStyle} onClick={() => fetchProd("smartphone")}>Smartphone</button>
      {produto !== null ? (
        <Produto titulo={produto.nome} preco={produto.preco} />
      ) : null}
    </>
  );
};

export default App;
