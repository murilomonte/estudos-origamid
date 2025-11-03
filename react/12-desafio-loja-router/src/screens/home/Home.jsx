import React from "react";
import Head from "../../Head";
import useFetch from "../../hooks/useFetch";
import styles from './Home.module.css';

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const Home = () => {
  const { data, isLoading, error, request } = useFetch();

  React.useEffect(() => {
    request("https://ranekapi.origamid.dev/json/api/produto");
  }, [request]);

  return (
    <main className={styles.main}>
      <Head
        title="Produtos"
        description="Onde você encontra os melhores produtos."
      />
      {error ? <p>Error</p> : null}
      {isLoading ? <p>Carregando...</p> : null}
      {data
        ? data.map((produto) => {
            return (
              <section key={produto.id} className={styles.produto}>
                <div className={styles.imgContainer} >
                  <img
                    src={produto.fotos[0].src}
                    alt={produto.fotos[0].titulo}
                  />
                </div>
                <h2>{produto.nome}</h2>
              </section>
            );
          })
        : null}
    </main>
  );
};

export default Home;

// {
//   "id": "notebook-3",
//   "fotos": [
//     {
//       "titulo": "notebook-4",
//       "src": "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-2.jpg"
//     },
//     {
//       "titulo": "smartwatch-3",
//       "src": "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartwatch-2.jpg"
//     }
//   ],
//   "nome": "Notebook",
//   "preco": "2300",
//   "descricao": "Gostaria de enfatizar que o início da atividade geral de formação de atitudes pode nos levar a considerar.",
//   "vendido": "false",
//   "usuario_id": "lobo@origamid.com"
// },
