import React from "react";
import Produto from "./Produto";
import Title from "./Title";

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Produtos = () => {
  return (
    <section>
      <Title text={'Produtos'} />
      {produtos.map(({ nome, propriedades }) => {
        return <Produto key={nome} nome={nome} propriedades={propriedades} />;
      })}
    </section>
  );
};

export default Produtos;
