import React from "react";

const Challenge = () => {
  const num1 = 4;
  const num2 = 19;

    const soma = () => {
        let valor = num1 + num2;
        console.log(valor);

        return valor;
    }

  return (
    <div>
      <h1>Challenge</h1>
      <p>
        Os valores criados são: {num1} e {num2}
      </p>

      <button onClick={soma}>Soma valores</button>
    </div>
  );
};

export default Challenge;
