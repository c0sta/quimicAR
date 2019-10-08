import React from 'react';
import './Fosforo.css';
export default function Fosforo() {
  
  function clickHandler(){
        
  }
  return (
    <button onClick={clickHandler} className="Button-container-fosforo">
        <text className="Button-numero">15</text>
        <text className="Button-sigla">P</text>
        <text className="Button-nome" >Fosforo</text>

    </button>
  );
}