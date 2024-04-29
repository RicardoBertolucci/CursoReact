// 3 - alterando o context
import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";
//É o cara que permite alterar o contexto

const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Add value to counter</button>
    </div>
  )
}

export default ChangeCounter
