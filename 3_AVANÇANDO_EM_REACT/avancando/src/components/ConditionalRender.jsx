import { useState } from 'react'

const ConditionalRender = () => {
    const [name, setName] = useState("Emanuelly");

  return (
    <div>
        {name === "Ricardo" ? (
            <div>
                <p>O nome é {name}</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}

        <button onClick={() => setName("Ricardo")}>Clique aqui!</button>
    </div>
  )
}

export default ConditionalRender