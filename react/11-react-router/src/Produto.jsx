import React from "react";
import {NavLink, Routes, Route, useLocation, useParams } from "react-router-dom";

import ProdutoAvaliacao from "./ProdutoAvaliacao";
import ProdutoDescricao from "./ProdutoDescricao";

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
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
      </Routes>
    </div>
  );
};

export default Produto;
