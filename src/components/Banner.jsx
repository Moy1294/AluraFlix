import React from 'react';
import '../styles/components/Banner.css';

function Banner() {
  return (
    <div className="banner" style={{backgroundImage: "url('/banner-bg.jpg')"}}>
      <div className="banner-content">
        <h1>Bienvenido a AluraFlix</h1>
        <p>Tu plataforma de videos educativos</p>
      </div>
    </div>
  );
}

export default Banner;
