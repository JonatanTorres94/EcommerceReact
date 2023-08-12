import React, { useContext, useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { CartContext } from '../../contex/CartContext';
import { DarkModeContext } from '../../contex/DarkModeContext';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ item }) => {
    const { addCart, isInCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(0); // Inicializamos el contador a 1
    const { isDarkMode } = useContext(DarkModeContext)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            quantity
        }
        if (!isInCart(item.id) && item.stock !== 0) {
            addCart(newItem)
        }

    }


    return (
        <div className={`${isDarkMode ? 'dark' : ''}`} style={{ height: '100vh', marginTop: '10%' }}>
            <div className="max-w-xs mx-auto bg-white shadow-md rounded-md p-4 dark:text-white" >
                <h2 className="text-xl font-semibold mb-2 text-elements">{item.name}</h2>
                <img className="w-full mb-2" src={item.imageSrc} alt={item.imagealt} />
                <p className="text-gray-600 mb-2 text-elements">{item.imageAlt}</p>
                <p className="text-lg font-semibold mb-4 text-elements">${item.price}</p>
                <p className="text-gray-600 mb-2 text-elements">In Stock: {item.stock}</p>

                {
                    isInCart(item.id)
                        ? <Link className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-block mx-2" to="/cart">Finish my purchase</Link>
                        : <ItemCount
                            max={item.stock}
                            counter={quantity}
                            setCounter={setQuantity}
                            adding={handleAgregar}
                        />
                }


            </div>
        </div>
    );
};
