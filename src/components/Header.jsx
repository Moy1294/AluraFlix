import React from 'react';
import { Link } from 'react-router-dom';
import { useVideos } from '../hooks/useVideos';
import '../styles/components/Header.css';

function Header() {
  const { clearDatabase, generateRandomData } = useVideos();

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img src="/src/assets/AluraFlux Logo Final 912x426.png" alt="AluraFlix Logo" className="app-logo" />
        </Link>
        <nav>
          <ul>
            <li><Link to="/new-video" className="green-button">Registrar Nuevo Video</Link></li>
            <li><Link to="/new-category" className="green-button">Editar o Crear Categoría</Link></li>
            <li><button onClick={clearDatabase} className="red-button">Limpiar DB</button></li>
            <li><button onClick={generateRandomData} className="blue-button">Generar Información Aleatoria</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
