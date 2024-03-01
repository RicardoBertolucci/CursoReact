import styles from "./MyForm.module.css";

import { useState } from "react";

const MyForm = ({user}) => {
  //3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email);

    //7 - Limpar formulário
    setName('');
    setEmail('');
  }

  return (
    <div>
      {/*5 - Envio do formulário */}
      {/*1 - Criação de Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 - Label envolvendo inpout */}
        <label>
          <span>E-mail</span>
          {/*4- Simplificação de manipulação de state */}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
