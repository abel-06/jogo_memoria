import React, { useEffect, useState } from 'react';

import styles from './GameMemory.module.css';

import versoCarta from '../assets/Carta_memory.webp';

import Carta from './Carta';

//imagens
import Magem_1 from '../assets/Magem_1.jpg';
import Magem_2 from '../assets/Magem_2.jpg';
import Magem_3 from '../assets/Magem_3.jpg';
import Magem_4 from '../assets/Magem_4.jpg';
import Magem_5 from '../assets/Magem_5.jpg';
import Magem_6 from '../assets/Magem_6.jpg';
import Magem_7 from '../assets/Magem_7.jpg';
import Magem_8 from '../assets/Magem_8.jpg';
import Magem_9 from '../assets/Magem_9.jpg';
import Magem_10 from '../assets/Magem_10.jpg';
import Magem_11 from '../assets/Magem_11.jpg';
import Magem_12 from '../assets/Magem_12.jpg';
import Magem_13 from '../assets/Magem_13.jpg';
import Magem_14 from '../assets/Magem_14.jpg';


const pares = [
  { imagem: Magem_1 },
  { imagem: Magem_2 },
  { imagem: Magem_3 },
  { imagem: Magem_4 },
  { imagem: Magem_5 },
  { imagem: Magem_6 },
  { imagem: Magem_7 },
  { imagem: Magem_8 },
  { imagem: Magem_9 },
  { imagem: Magem_10 },
  { imagem: Magem_11 },
  { imagem: Magem_12 },
  { imagem: Magem_13 },
  { imagem: Magem_14 },
 
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
        <div className={styles.tabuleiro}>
          {cartas.map((carta, idx) => (
    <Carta
      key={carta.id}
      virada={carta.virada}
      encontrada={carta.encontrada}
      imagem={carta.imagem}
      verso={versoCarta}
      aoClicar={() => handleCartaClick(idx)}
    />
    ))}
            </div>

          <div className="button">
            <button onClick={reiniciarJogo}>Reiniciar Jogo</button>
          </div>
        </div>
  )
}

export default GameMemory