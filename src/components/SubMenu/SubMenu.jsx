import React from 'react';
import { Link } from 'react-router-dom';

export const SubMenu = () => {
    return (
        <nav className="flex justify-center mt-4" style={{margin:'2%'}}>
            <Link to="/product/component" className="inline-block px-4 py-2 mx-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded">
                Components
            </Link>
            <Link to="/product/cabinet" className="inline-block px-4 py-2 mx-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded">
                Cabinets
            </Link>
            <Link to="/product/peripherals" className="inline-block px-4 py-2 mx-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded">
                Peripherals
            </Link>
        </nav>
    )
}