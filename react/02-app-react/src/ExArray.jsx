import React from "react";

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

const ExArray = () => {
  const dadosFiltrados = produtos.filter(
    ({ preco }) => Number(preco.replace("R$ ", "")) >= 1500,
  );
  return (
    <>
      <section>
        {dadosFiltrados.map((produto) => {
          return (
            <div key={produto.id}>
              <h1>Nome: {produto.nome}</h1>
              <p>Preco: {produto.preco}</p>
              <div>
                {produto.cores.map((cor) => {
                  return (
                    <p key={cor} style={{ background: cor, color: "white" }}>
                      {cor}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

const Section = (id, nome, preco, cores) => {
  return (
    <section key={id}>
      <h1>Nome: {nome}</h1>
      <p>Preco: {preco}</p>
      <div>
        {cores.map((cor) => {
          <p style={{ color: cor }}>{cor}</p>;
        })}
      </div>
    </section>
  );
};

export default ExArray;
