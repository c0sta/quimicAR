import React from 'react';
import './Camera.css';
import cameraIcon from '../../assets/camera.png';

export default function Camera() {
  return (
    <div className="Camera-container">
        <img src={cameraIcon} className="Camera-img" alt="camera icon"></img>
        <text className="Camera-text">Camera </text>
    </div>
  );
}

