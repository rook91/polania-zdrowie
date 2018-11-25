import React from 'react';
import ReactDOM from 'react-dom';
import QuantumAnalyzer from './pages/QuantumAnalyzer';
import NavBar from "./components/Navbar";


const menuItems = ['Strona główna', 'O Firmie', 'Nasza Oferta', 'Literatura', 'Cennik', 'Kontakt'];
ReactDOM.render(
    <div>
        <NavBar menuItems={menuItems}/>
        {/*<QuantumAnalyzer />*/}
    </div>,
    document.getElementById('main')
);
