import React from 'react';

export const ItemDetail = ({ item }) => {
    return (
        <div style={{ height: '100vh', marginTop: '10%' }}>
            <div className="max-w-xs mx-auto bg-white shadow-md rounded-md p-4">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <img className="w-full mb-2" src={item.imageSrc} alt={item.imageAlt} />
                <p className="text-gray-600 mb-2">{item.imageAlt}</p>
                <p className="text-lg font-semibold mb-4">${item.price}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    Agregar
                </button>
            </div>
        </div >
    );
};
