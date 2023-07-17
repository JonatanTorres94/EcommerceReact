import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Mi Tienda Online. Todos los derechos reservados.
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/termsofuse" className="text-gray-300 hover:text-white">
            Términos de uso
          </Link>
          <Link to="/privacypolicy" className="text-gray-300 hover:text-white">
            Política de privacidad
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
};


