import React from "react";
import Produto from "./Produto";

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const App = () => {
  const [produto, setProduto] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  async function fetchProduto(event) {
    const tipo = event.target.innerText.toLowerCase();

    try {
      setIsLoading(true);

      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${tipo}`,
      );
      const json = await response.json();
      setProduto(json);

      setIsLoading(false);
    } catch (err) {
      console.log("Erro fetch na api: " + err);
    }
  }

  return (
    <>
      <div>
        <button style={{ margin: 10 }} onClick={fetchProduto}>
          Tablet
        </button>
        <button style={{ margin: 10 }} onClick={fetchProduto}>
          Smartphone
        </button>
        <button style={{ margin: 10 }} onClick={fetchProduto}>
          Notebook
        </button>
      </div>
      {isLoading ? <p>Carregando...</p> : null}
      {!isLoading && produto != null ? (
        <Produto
          nome={produto.nome}
          preco={produto.preco}
          img={produto.fotos[0].src}
        />
      ) : null}
    </>
  );
};

export default App;
