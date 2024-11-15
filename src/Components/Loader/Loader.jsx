// src/components/Loader.jsx
import React from 'react';
import './LoaderStyles.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Cargando...</p>
    </div>
  );
};

export default Loader;