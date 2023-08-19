import React, { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };
  const decrementar = () => {
    setContador(contador - 1);
  };

  const reset = () => {
    setContador(0);
  };
  return (
    <div>
      <h1>Contador</h1>
      <p>Valor : {contador} </p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
};

export default Contador;
