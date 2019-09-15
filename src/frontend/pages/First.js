import React from 'react';
import './First.css';

// IMPORTING COMPONENTS
import Header from '../components/Main/Header';
import Camera from '../components/Camera/Camera';
import Marcador from '../components/Marcador/Marcador';

export default function First() {
  return (

    <div className="First-container">
    
        <Header className="First-header" />
        <div className="First-buttons">
            <Camera />
                <text className="First-text">Ou</text>
            <Marcador />
        </div>
    </div>
  );
}
