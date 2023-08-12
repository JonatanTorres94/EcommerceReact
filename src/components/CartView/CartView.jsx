import { useContext } from "react"
import { CartContext } from "../../contex/CartContext"
import { FaTrash } from 'react-icons/fa'
import { Link } from "react-router-dom"

export const CartView = () => {

    const { cart, fullValue, emptyCart, remuveCart } = useContext(CartContext)

    return (
        <div className="p-4 border border-gray-300 rounded">
            <h2 className="text-2xl font-semibold mb-4">Your purchase:</h2>
            <hr className="mb-4" />

            <div className="ml-40">
                {cart.map((item) => (
                    <div key={item.id} className="flex items-center mb-4">
                        <img
                            src={item.imageSrc}
                            alt={item.name}
                            className="w-20 h-20 object-contain rounded mr-4"
                        />

                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p>Precio: ${item.price * item.quantity}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <button onClick={() => remuveCart(item.id)}
                                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <hr className="my-4" />

            <div>
                <h4 className="text-xl font-semibold">Total: ${fullValue()}</h4>
                <button
                    onClick={emptyCart}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                    Empty Cart
                </button>

                <Link className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-block mx-2" to="/checkout">
                    Finish my purchase
                </Link>
            </div>
        </div>
    )
}