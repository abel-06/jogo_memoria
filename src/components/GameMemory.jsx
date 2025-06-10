import React, { useEffect, useState } from 'react';

import './GameMemory.module.css';

const pares = [
  {imagem: "A"},
  {imagem: "B"},
  {imagem: "C"},
  {imagem: "D"},
  {imagem: "F"},
  {imagem: "H"},
]

function embaralhar(array) {
  const NovoArray = [...array];
  for (let i = NovoArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [NovoArray[i], NovoArray[j]] = [NovoArray[j], NovoArray[i]];
  }
  return NovoArray;
}

const GameMemory = ({setTela}) => {
  const cartasBase = pares.flatMap((par, idx) => [
    {id: idx * 2, imagem: par.imagem, virada: false, encontrada: false},
    {id: idx * 2 + 1, imagem: par.imagem, virada: false, encontrada: false}
  ])

  const [cartas, setCartas] = useState([]);
  const [selecionadas, setSelecionadas] = useState([]);
  const [tentativas, setTentativas] = useState(0);

  useEffect(() => {
    setCartas(embaralhar(cartasBase));
  }, []);

  useEffect(() => {
    if (selecionadas.length === 2) {
      setTentativas(t => t + 1);
      const [idx1, idx2] = selecionadas;
    if (selecionadas.length === 2) {
      const [idx1, idx2] = selecionadas;
      if (cartas[idx1].imagem === cartas[idx2].imagem) {
        //par encontrado
        setTimeout(() => {
          setCartas(cartasAntigas => cartasAntigas.map((c, i) =>
          i === idx1 || i === idx2 ? {...c, encontrada: true} : c));
          setSelecionadas([]);
        }, 1000);
      } else {
        //Não é par
        setTimeout(() => {
          setCartas(cartasAntigas => cartasAntigas.map((c, i) => 
          i === idx1 || i === idx2 ? {...c, virada: false} : c
        )
        );
        setSelecionadas([]);
        }, 1000);
      }
    }
    }
  }, [selecionadas, cartas]);

   useEffect(() => {
  if (cartas.length > 0 && cartas.every(c => c.encontrada)) {
    setTimeout(() => {
      if (typeof setTela === 'function') setTela('final');
    }, 800);
  }
}, [cartas, setTela]);


  const handleCartaClick = (idx) => {
    if (cartas[idx].virada || cartas[idx].encontrada || selecionadas.length === 2) return;
    setCartas(cartas.map((c, i) => i === idx ? {...c, virada: true} : c));
    setSelecionadas([...selecionadas, idx]);
  }

  const reiniciarJogo = () => {
  setCartas(embaralhar(cartasBase));
  setSelecionadas([]);
  setTentativas(0);
}

  return (
    <div>
        <h1>Game Memory</h1>
        <h2>Tentativas: {tentativas}</h2>
        <div className="tabuleiro">
          {cartas.map((carta, idx) => (
            <div key={carta.id} className='carta' onClick={() => handleCartaClick(idx)}>
              {carta.virada || carta.encontrada ? carta.imagem : "???"}
            </div>
          ))}
          <div className="button">
            <button onClick={reiniciarJogo}>Reiniciar Jogo</button>
          </div>
        </div>
    </div>
  )
}

export default GameMemory