import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Home from './pages/Home';
import First from './pages/First';


export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/atomo/oxigenio" exact component={First} />
            <Route path="/atomo/hidrogenio" exact component={First} />
            <Route path="/atomo/fosforo" exact component={First} />
            <Route path="/atomo/boro" exact component={First} />
        </BrowserRouter>
    );
}