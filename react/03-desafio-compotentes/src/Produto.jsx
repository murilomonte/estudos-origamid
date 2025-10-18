import React from "react";

const Produto = ({nome, propriedades}) => {
  return (
    <div style={{ border: '2px solid black', padding: 20, margin: 10}}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Produto;
