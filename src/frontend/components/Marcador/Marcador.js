import React from 'react';
import './Marcador.css';
import marcadorIcon from '../../assets/qrcode.png';

export default function Marcador() {
  return (
    <div className="Marcador-container">
        <img src={marcadorIcon} className="Marcador-img" alt="marcador icon"></img>
        <text className="Marcador-text">Marcador </text>
    </div>
  );
}
