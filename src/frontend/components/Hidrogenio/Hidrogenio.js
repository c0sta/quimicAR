import React from 'react';
import './Hidrogenio.css';

export default function Hidrogenio() {
  
  function clickHandler(){
        
  }
  return (
    <button onClick={clickHandler} className="Button-container-hidrogenio">
        <text className="Button-numero">1</text>
        <text className="Button-sigla">H</text>
        <text className="Button-nome" >Hidrogênio</text>

    </button>
  );
}