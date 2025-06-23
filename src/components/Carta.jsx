import React from 'react'
import styles from './Carta.module.css'

const Carta = ({ virada, encontrada, imagem, verso, aoClicar }) => {
  return (
   <div
    className={styles.carta}
    onClick={aoClicar}
  >
    {virada || encontrada ? (
      <img src={imagem} alt="Carta" />
    ) : (
      <img src={verso} alt="Verso da carta" />
    )}
  </div>
);
}

export default Carta