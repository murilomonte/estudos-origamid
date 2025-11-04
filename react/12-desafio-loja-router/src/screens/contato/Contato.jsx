import React from "react";
import Head from "../../Head";
import styles from './Contato.module.css'

const Contato = () => {
  return (
    <>
      <Head
        title="Produtos"
        description="Onde você encontra os melhores produtos."
      />
      <section className={styles.contato}>
        <img src="src/img/contato.jpg" alt="" />
        <div>
          <h2>Entre em contato</h2>
          <ul>
            <li>email@email.com</li>
            <li>(86) 9-9999-9999</li>
            <li>Rua bem ali, 999</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contato;
