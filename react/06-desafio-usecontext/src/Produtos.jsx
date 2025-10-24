import React, { useEffect } from "react";
import { GlobalContext } from "./GlobalContex";
import Produto from "./Produto";

const Produtos = () => {
  const global = React.useContext(GlobalContext);

  React.useEffect(() => {
    global.fetchDados();
  }, []);

  const containerStyle = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "20px",
  };

  return (
    <>
      {global.dados !== null ? (
        <div style={containerStyle}>
          {global.dados.map((prod) => {
            return (
              <Produto
                key={prod.id}
                nome={prod.nome}
                preco={prod.preco}
                img={prod.fotos[0].src}
              ></Produto>
            );
          })}
        </div>
      ) : <p>Sem dados carregados</p>}

      <button onClick={() => global.limparDados()}>Limpar dados</button>
      <button onClick={() => global.fetchDados()}>Fetch dados</button>
    </>
  );
};

export default Produtos;
