import { useState, useEffect } from 'react'

import './App.css'

import TelaInicial from './components/TelaInicial'

import GameMemory from './components/GameMemory'
import TelaFinal from './components/TelaFinal'


const telas = [
  {id: 1, name: 'inicio'},
  {id: 2, name: 'jogo'},
  {id: 3, name: 'final'},
];

function App() {

  const [tela, setTela] = useState(telas[0].name);

  const telasJogo = () => {
    setTela(telas[1].name);
  };

  return (
    <div className='App'>
      {tela === 'inicio' && <TelaInicial telasJogo={telasJogo} />}
      {tela === 'jogo' && <GameMemory setTela={setTela} />}
      {tela === 'final' && <TelaFinal setTela={telasJogo} />}
      
    </div>
  )
}

export default App
