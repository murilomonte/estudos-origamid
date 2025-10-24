import React from "react";

const Produto = ({ nome, preco, img }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px 20px",
        borderRadius: "10px",
      }}
    >
      <img style={{ width: "200px" }} src={img} alt={nome} />
      <h1>{nome}</h1>
      <p>R$ {preco}</p>
    </div>
  );
};

export default Produto;
