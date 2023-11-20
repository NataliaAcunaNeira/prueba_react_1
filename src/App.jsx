import React from 'react';
import './App.css';
import MiApi from './MiApi';
import Buscador from './Buscador';

function App() {
  return (
    <>

      <div className="title">
        <h1>Busca tu próximo destino</h1>
      </div>
      <Buscador />
      <MiApi />
    </>
  );
}

export default App;
