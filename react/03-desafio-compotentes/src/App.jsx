import React from "react";
import Home from "./Home";
import Produtos from "./Produtos";
const { pathname } = window.location;

const App = () => {
  if (pathname == "/produtos") {
    return <Produtos/>;
  }
  return <Home/>;
};

export default App;
