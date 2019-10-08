import React from 'react';
import './Oxigenio.css';
export default function Oxigenio() {

    function clickHandler(){
        
    }
  return (
    <button onClick={clickHandler} className="Button-container-oxigenio">
        <text className="Button-numero">8</text>
        <text className="Button-sigla">O</text>
        <text className="Button-nome" >Oxigênio</text>

    </button>
  );
}