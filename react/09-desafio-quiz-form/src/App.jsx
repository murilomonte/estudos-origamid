import React from "react";
import RadioGroup from "./form/RadioGroup";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const App = () => {
  const [choice, setChoice] = React.useState(null); // -> para guardar a resposta selecionada
  const [slide, setSlide] = React.useState(0); // -> para controlar qual o indice da pergunta
  const [score, setScore] = React.useState(null); // -> para armazenar a quantidade de pontos

  function handleSubmit(event) {
    event.preventDefault();
    if (choice !== null) {
      if (choice == perguntas[slide].resposta) {
        setScore(score + 1);
      }
      changeSlide();
    }
  }

  function changeSlide() {
    if (slide < perguntas.length) {
      setChoice(null);
      setSlide(slide + 1);
    }
  }

  if (slide < perguntas.length) {
    return (
      <form id={perguntas[slide].id} onSubmit={handleSubmit}>
        <h1>{perguntas[slide].pergunta}</h1>

        <RadioGroup
          options={perguntas[slide].options}
          state={choice}
          setState={setChoice}
        />

        <button>Responder</button>
      </form>
    );
  } else {
    return (
      <p>
        Voce acertou {score} perguntas de {perguntas.length}
      </p>
    );
  }
};

export default App;
