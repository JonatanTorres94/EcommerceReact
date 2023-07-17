import React, { useState, useEffect } from 'react';
import './spinner.css'; // Archivo de estilos CSS para el spinner

export const Spinner = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simular un tiempo de carga para demostración
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="spinner-overlay">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          {/* Contenido principal */}
        </div>
      )}
    </div>
  );
};

