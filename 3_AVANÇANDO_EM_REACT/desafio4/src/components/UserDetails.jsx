import React from "react";

const UserDetails = ({ name, age, job, cnh }) => {
  return (
    <>
      <div>
        <p>Nome: {name}</p>
        <p>Idade: {age}</p>
        <p>Profissão: {job}</p>
        {age >= cnh ? (
          <p>{name} pode tirar a CNH</p>
        ) : (
          <p>{name} não pode tirar a cnh</p>
        )}
        <br />
      </div>
    </>
  );
};

export default UserDetails;
