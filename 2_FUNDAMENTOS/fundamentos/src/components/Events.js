import React from 'react'

const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);

        console.log("Ativou o evento de click");
    }

    return (
    <div>
        <div>
            <button onClick={handleMyEvent}>Clique Aqui</button>
        </div>
    </div>
  )
}

export default Events