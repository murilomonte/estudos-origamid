import React from "react";
import RadioGroup from "./form/RadioGroup";

const Pergunta = ({ question, alternatives, correctAnswer }) => {
  const [choice, setChoice] = React.useState("");

  function validate() {
    // valida antes do submit
    // se a resposta esta correta, setIndex(index++)
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{question}</h1>
      <RadioGroup options={alternatives} state={choice} setstate={setChoice} />
      <button>Responder</button>
    </form>
  );
};

export default Pergunta;
