import { FiMapPin } from 'react-icons/fi'
import { IoMdCart } from 'react-icons/io'
import React from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center">
                    <img src="/public/storeIT200.png" alt="Logo" className="h-8 mr-4" />
                    <div className="flex items-center">
                        <FiMapPin className="text-gray-600" /> {/* Icono de ubicación */}
                        <div className="ml-2">Ubicación</div>
                    </div>
                    <input type="text" placeholder="Buscar" className="border border-gray-300 rounded px-2 py-1 ml-4" />
                    <button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2">Ofertas</button>
                </div>
                <div className="flex items-center">
                    <nav className="mr-4 space-x-4">
                        <Link to="/" className="text-gray-600 hover:text-blue-500">Nuestros Productos</Link>
                        <Link to="/storep2p" className="text-gray-600 hover:text-blue-500">Tienda P2P</Link>
                        <Link to="/history" className="text-gray-600 hover:text-blue-500">Historial</Link>
                        <Link to="/contact" className="text-gray-600 hover:text-blue-500">Contacto</Link>
                        <Link to="/login" className="text-gray-600 hover:text-blue-500">Iniciar sesión</Link>
                        <Link to="/cart" className="text-gray-600 hover:text-blue-500">
                            <IoMdCart className="inline-block mr-1" />
                            Carrito
                        </Link>
                    </nav>
                </div>
            </div>

        </header>
    );
};