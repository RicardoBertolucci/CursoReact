// 1 - criar context
import { createContext, useState } from "react";

export const CounterContext = createContext();
//Eu invoco essa função que eu acabei de exportar com o nome do contexto

// 2 - Criar provider
export const CounterContextProvider = ({children}) => {

  const [ counter, setCounter ] = useState(1);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  )

}