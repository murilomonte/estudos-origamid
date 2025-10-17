import React from "react";

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  function getTotalGasto(lista) {
    let valores = lista.map((item) => {
      return Number(item.preco.replace("R$ ", ""));
    });

    let valorTotal = valores.reduce((acc, curr) => acc + curr);

    return valorTotal;
  }

  const totalGasto = getTotalGasto(dados.compras);

  const ativoStyle = {
    color: "green",
  };

  const inativoStyle = {
    color: "red",
  };

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:
        <span style={dados.ativa ? ativoStyle : inativoStyle}>
          {dados.ativa ? " Ativa" : " Inativa"}
        </span>
      </p>
      <p>Valor gasto: R$ {totalGasto}</p>
      {totalGasto > 10000 ? <p>Voce está gastando muinto</p> : null}
    </div>
  );
};

export default App;
