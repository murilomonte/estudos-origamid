import React from "react";

const Produto = ({ nome, preco, img }) => {
  return (
    <div>
      <h1>{nome}</h1>
      <p>R$ {preco}</p>
      <img src={img} alt={nome} />
    </div>
  );
};

export default Produto;
