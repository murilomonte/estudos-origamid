import { useState } from "react";
import { GlobalStorage } from "./GlobalContex";
import Produtos from "./Produtos";

function App() {
  return <GlobalStorage>
    <Produtos/>
  </GlobalStorage>;
}

export default App;
