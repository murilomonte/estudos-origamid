import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Produto = () => {
  // Acessa os parametros passados pela url
  const params = useParams();

  // Armazena os dados da rota, como os parametros de busca: "?q=teste&foo=bar"
  const location = useLocation();

  // Agora sendo possivel acessar por meio de um objeto
  const search = new URLSearchParams(location.search);
  console.log(search.get('foo')) // -> bar
  


  return (
    <div>
      <h1>Produto: {params.id}</h1>
    </div>
  );
};

export default Produto;
