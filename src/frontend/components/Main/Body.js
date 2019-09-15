import React from 'react';
import './Body.css';
import { Link } from 'react-router-dom';

import Oxigenio from '../Oxigenio/Oxigenio';
import Hidrogenio from '../Hidrogenio/Hidrogenio';
import Boro from '../Boro/Boro';
import Fosforo from '../Fosforo/Fosforo';

export default function Body() {
  return (
    <div className="App-container">
        <div className="Container-buttons">
          <Link to="/atomo/hidrogenio" className="Link">
            <Hidrogenio /> 
          </Link>
          <Link to="/atomo/boro" className="Link">
            <Boro />
          </Link>
          <Link to="/atomo/oxigenio" className="Link">
            <Oxigenio />
          </Link> 
          <Link to="/atomo/fosforo" className="Link">
            <Fosforo />
          </Link>
        </div>
    </div>
  );
}