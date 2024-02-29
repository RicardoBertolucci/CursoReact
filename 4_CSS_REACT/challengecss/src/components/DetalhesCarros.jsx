import React from "react";
import styles from "./DetalhesCarros.module.css";

const DetalhesCarros = () => {
  const detalhes = [
    { id: 1, nome: "TAOS", marca: "Volkswagen", cavalos: 150 },
    { id: 2, nome: "Eclipse Cross", marca: "Mitsubishi", cavalos: 165 },
    { id: 3, nome: "Pulse", marca: "Fiat", cavalos: 119 },
  ];

  return (
    <div>
      {detalhes.map((item) => (
        <div key={item.id} className={getStyle(item.id)}>
          <p>{item.nome}</p>
          <p>{item.marca}</p>
          <p>{item.cavalos}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

function getStyle(id) {
  switch (id) {
    case 1:
      return styles.divStyle1;
    case 2:
      return styles.divStyle2;
    case 3:
      return styles.divStyle3;
    default:
      return "";
  }
}

export default DetalhesCarros;
