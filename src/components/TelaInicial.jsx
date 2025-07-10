import React from 'react'
import Styles from  './TelaInicial.module.css'

const TelaInicial = ({telasJogo}) => {
  return (
    <div className={Styles.inicio}>
        <h1>Bem-Vindo ao Game Memory</h1>
        <p>Teste sua memória com este divertido jogo de cartas!</p>
        <button onClick={telasJogo}>Iniciar Jogo</button>
    <div className={Styles.instrucoes}>
          <p><strong>Como Jogar</strong></p>
          <ul>
            <li>O objetivo do jogo é encontrar todos os pares de cartas.</li>
            <li>Clique em duas cartas para virá-las.</li>
            <li>Se as cartas forem iguais, você as encontrou!</li>
            <li>Se não, elas voltarão a ficar viradas para baixo.</li>
            <li>Continue até encontrar todos os pares!</li>
            <li>Você pode reiniciar o jogo a qualquer momento.</li>
          </ul>
    <div className='dica'>
      <p><strong>Dicas</strong></p>
      <ul>
        <li>Caso esteja no celular recomendo que ative a opção "Site para computador" nos três pontinhos do canto superior direito para uma melhor experiência</li>
       <li>Caso queira voltar para a tela inicial só reiniciar que você sera redirecionado</li>
        <li>Divirta-se e boa sorte!</li>
      </ul>
    </div>

        </div>
        </div>
  )
}

export default TelaInicial