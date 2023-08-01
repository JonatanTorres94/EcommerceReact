import { createContext, useState } from "react";
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    

    const addCart = (item) => {
        setCart([...cart, item])
    }


    const fullValue = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity,0)
    }

    const totalQuantily = () => {
        return cart.reduce ((acc, item) => acc + item.quantity, 0)
    }

    const remuveCart = (id) =>{
        setCart ( cart.filter((item) => item.id !== id) )

    }

    const emptyCart = () =>{
        return setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addCart,
            fullValue,
            setCart,
            emptyCart,
            remuveCart,
            totalQuantily
        }} >

            {children}
        </CartContext.Provider>
    )
}