import React from 'react';
import './Boro.css';

export default function Boro() {
 
  function clickHandler(){
  
      } 
  return (
    <button onClick={clickHandler} className="Button-container-boro">
        <text className="Button-numero">5</text>
        <text className="Button-sigla">B</text>
        <text className="Button-nome" >Boro</text>

    </button>
  );
}