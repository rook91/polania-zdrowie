import React from 'react';
import ReactDOM from 'react-dom';
import QuantumAnalyzer from './pages/QuantumAnalyzer';
import NavBar from "./components/Navbar";

import './main.less';

const menuItems = ['STRONA GŁÓWNA', 'O FIRMIE', 'NASZA OFERTA', 'LITERATURA', 'CENNIK', 'KONTAKT'];
ReactDOM.render(
    <div>
        <NavBar menuItems={menuItems}/>
        {/*<QuantumAnalyzer />*/}
    </div>,
    document.getElementById('main')
);
