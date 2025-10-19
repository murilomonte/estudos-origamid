import React from "react";

const Produto = ({ titulo, preco }) => {
  return (
    <div>
      <h1>{titulo}</h1>
      <p>R$ {preco}</p>
    </div>
  );
};

export default Produto;
