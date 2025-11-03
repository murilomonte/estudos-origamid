import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./screens/home/Home";
import Header from "./screens/_partials/Header";
import Contato from "./screens/contato/Contato";
import NotFound from "./screens/errors/NotFound";
import './global.css'

const App = () => {
  return (
    <BrowserRouter>
      <section style={{ width: '900px', margin: '0 auto'}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contato" element={<Contato />} />
          <Route path="produto/:id" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
};
export default App;
