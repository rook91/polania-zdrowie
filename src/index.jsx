import React from 'react';
import ReactDOM from 'react-dom';
import QuantumAnalyzer from './pages/QuantumAnalyzer';
import NavBar from "./components/Navbar";

ReactDOM.render(
    <div>
        <NavBar/>
        <QuantumAnalyzer />
    </div>,
    document.getElementById('main')
);
