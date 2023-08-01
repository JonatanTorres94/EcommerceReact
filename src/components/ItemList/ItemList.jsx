import { useContext } from "react"
import ItemCard from "../ItemCard/ItemCard"
import { DarkModeContext } from "../../contex/DarkModeContext"
import { Footer } from "../Footer/Footer"

const ItemList = ({ products }) => {
    const {isDarkMode} = useContext(DarkModeContext)
    return (
        <div style={{ height: '150vh' }}>
            <div className={`bg-white ${isDarkMode ? 'dark' : ''}`}>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-10 lg:grid-cols-4 xl:gap-x-10">
                        {products.map((product) => <ItemCard key={product.id} item={product} />)}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ItemList