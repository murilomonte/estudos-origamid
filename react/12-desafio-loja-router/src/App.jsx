import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./screens/home/Home";
import Header from "./screens/_partials/Header";
import Footer from "./screens/_partials/Footer";
import Contato from "./screens/contato/Contato";
import NotFound from "./screens/errors/NotFound";
import './global.css'
import Produto from "./screens/home/produto/Produto";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <section className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contato" element={<Contato/>} />
            <Route path="produto/:id" element={<Produto/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer/>
        </section>
      </BrowserRouter>
    </div>
  );
};
export default App;
