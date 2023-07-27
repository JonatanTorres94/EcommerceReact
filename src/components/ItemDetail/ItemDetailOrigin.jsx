import React, { useContext, useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { CartContext } from '../../contex/CartContext';

export const ItemDetailOrigin = ({ item }) => {

    const {cart, setCart} = useContext(CartContext)
    const [quantity, setquantity] = useState(0)

    const handleAdd = () => {
        item.stock = item.stock - quantity
        const newItem = {
            ...item,
            setquantity
        }
        
        console.log(newItem)
    }

    return (
        <div style={{ height: '100vh', marginTop: '10%' }}>
            <div className="max-w-xs mx-auto bg-white shadow-md rounded-md p-4">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <img className="w-full mb-2" src={item.imageSrc} alt={item.imageAlt} />
                <p className="text-gray-600 mb-2">{item.imageAlt}</p>
                <p className="text-lg font-semibold mb-4">${item.price}</p>
                <ItemCount max={item.stock} counter={quantity} setCounter={setquantity} adding={handleAdd}/>
            </div>
        </div >
    );
};
