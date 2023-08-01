import React, { useContext, useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { CartContext } from '../../contex/CartContext';
import { DarkModeContext } from '../../contex/DarkModeContext';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ item }) => {
    const { addCart, isInCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1); // Inicializamos el contador a 1
    const [addedToCart, setAddedToCart] = useState(false); // Estado para controlar si el artículo ya está en el carrito
    const { isDarkMode } = useContext(DarkModeContext)

    const handleAdd = () => {
        if (quantity <= item.stock && quantity != 0) {
            item.stock = item.stock - quantity;
            const newItem = {
                ...item,
                quantity,
            };
            addCart(newItem)
            setAddedToCart(true); // Actualizamos el estado para indicar que el artículo ha sido agregado al carrito
        }
        if (quantity === 0) {
        }
    };

    // Función para restablecer el contador al stock disponible después de agregar al carrito
    const handleResetCounter = () => {
        setQuantity(0);
        setAddedToCart(false);
    };

    return (
        <div className={`${isDarkMode ? 'dark' : ''}`} style={{ height: '100vh', marginTop: '10%' }}>
            <div className="max-w-xs mx-auto bg-white shadow-md rounded-md p-4 dark:text-white" >
                <h2 className="text-xl font-semibold mb-2 text-elements">{item.name}</h2>
                <img className="w-full mb-2" src={item.imageSrc} alt={item.imagealt} />
                <p className="text-gray-600 mb-2 text-elements">{item.imageAlt}</p>
                <p className="text-lg font-semibold mb-4 text-elements">${item.price}</p>
                <p className="text-gray-600 mb-2 text-elements">In Stock: {item.stock}</p>



                {addedToCart ? (
                    // Si se ha agregado al carrito, mostramos un mensaje y un botón para restablecer el contador
                    <>
                        <div className="mb-4"> {/* Agrega un margen inferior a este contenedor */}
                            <p>¡Agregado al carrito!</p>
                            <button
                                onClick={handleResetCounter}
                                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                            >
                                Volver a agregar
                            </button>
                        </div>

                        <Link
                            className="block bg-green-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                            style={{textAlign:'center'}}
                            to="/cart"
                        >
                            Finish buying
                        </Link>
                    </>
                ) : (
                    // Si no se ha agregado al carrito, mostramos el contador normalmente

                    <ItemCount max={item.stock} counter={quantity} setCounter={setQuantity} adding={handleAdd} />

                )}



            
            </div>
        </div>
    );
};
