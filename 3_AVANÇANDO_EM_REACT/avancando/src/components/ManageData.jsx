import React from 'react'
import { useState } from 'react';

const ManageData = () => {
    const [number, setNumber] = useState(10);

    return (
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(25)}>Mudar variável</button>
        </div>
    )
}

export default ManageData