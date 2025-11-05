import React from "react";
import Head from "../../../Head";
import { useParams } from "react-router";
import useFetch from "../../../hooks/useFetch";
import styles from './Produto.module.css';

const Produto = () => {
  const { data, isLoading, error, request } = useFetch();
  const param = useParams();

  // Ta fazendo a request duas vezes
  React.useEffect(() => {
    request(`https://ranekapi.origamid.dev/json/api/produto/${param.id}`);
  }, []);
  console.log(data);
  return (
    <>
      <Head
        title="Produto"
        description="Onde você encontra os melhores produtos."
      />
      {error ? <p>Error</p> : null}
      {isLoading ? <img src="src/img/loading.gif"/> : null}
      {data ? (
        <section className={styles.produto} key={data.id}>
          <div >
            <img src={data.fotos[0].src} alt={data.fotos[0].titulo} />
          </div>
          <div className={styles.content}>
            <h1>{data.nome}</h1>
            <p className={styles.price}>R$ {data.preco}</p>
            <p>{data.descricao}</p>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Produto;
