import React from 'react';

function PageRenderer({ route }) {
  if (!route) {
    return null;
  }
  if (route.name === 'home') {
    return <h1>STRONA GŁÓWNA</h1>;
  }
  if (route.name === 'about') {
    return <h1>O FIRMIE</h1>;
  }
  if (route.name === 'offer') {
    return <h1>NASZA OFERTA</h1>;
  }
  if (route.name === 'literature') {
    return <h1>LITERATURA</h1>;
  }
  if (route.name === 'prizes') {
    return <h1>CENNIK</h1>;
  }
  if (route.name === 'contact') {
    return <h1>KONTAKT</h1>;
  }
}

export default PageRenderer;
