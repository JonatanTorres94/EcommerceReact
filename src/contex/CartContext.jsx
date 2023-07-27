import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addCart = (item) => {
        setCart([...cart, item])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addCart
        }} >

            {children}
        </CartContext.Provider>
    )
}