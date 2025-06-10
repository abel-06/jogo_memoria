import React from 'react'

const TelaInicial = ({telasJogo}) => {
  return (
    <div className='inicio'>
        <h1>Bem-Vindo ao Game Memory</h1>
        <p>Teste sua memória com este divertido jogo de cartas!</p>
        <button onClick={telasJogo}>Iniciar Jogo</button>
    </div>
  )
}

export default TelaInicial