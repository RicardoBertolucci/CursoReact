import React from 'react'

const TemplateExpressions = () => {
    const obj = {
        name: 'Ricardo',
        job: 'Desenvolvedor'
    };

  return (
    <div>
        <h1>Olá {obj.name}, tudo bem ?</h1>
        <p>Você atua como: {obj.job}</p>
    </div>
  )
}

export default TemplateExpressions