import React from 'react';
import './First.css';

// IMPORTING COMPONENTS
import Header from '../components/Main/Header';
import Camera from '../components/Camera/Camera';
import Marcador from '../components/Marcador/Marcador';

export default function First(props) {
  return (

    <div className="First-container">
    
        <Header className="First-header" />
        <div className="First-buttons">
            <Camera />
            <p className="First-text">Ou</p>
            <Marcador />


        </div>
    </div>
  );
}
