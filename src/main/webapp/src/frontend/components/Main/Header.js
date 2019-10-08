import React from 'react';
import './Header.css';
import logo from '../../assets/atomo.png';
import {Link } from 'react-router-dom';

export default function Oxigenio() {
  return (
    <Link to="/" className="Link  ">
    <header className="App-header">
     
        <h1 className="App-header-text">quimicAR</h1>
        <img src={logo} className="App-header-img" alt="logo" />
       
    </header>
    </Link> 
    
  );
}