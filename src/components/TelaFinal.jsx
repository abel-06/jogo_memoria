import React from 'react'

const TelaFinal = ({setTela}) => {
  return (
    <div>
      <h2>Parabéns! Você terminou o jogo!</h2>
      <button onClick={() => setTela('inicio')}>Voltar ao inicio</button>
    </div>
  )
}

export default TelaFinal