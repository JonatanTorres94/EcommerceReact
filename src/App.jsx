import { Header } from './components/Header/Header'
import 'tailwindcss/tailwind.css'
import '@tailwindcss/ui/dist/tailwind-ui.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Contact } from './components/Contact/Contact'
import { PageNotFound } from './components/PageNotFound/PageNotFound'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './contex/CartContext'
import { DarkModeProvider } from './contex/DarkModeContext'
import './App.css'
import { CartView } from './components/CartView/CartView'
import Checkout from './components/Checkout/Chekout'



function App() {

  return (

    <DarkModeProvider >
      <CartProvider>

        <BrowserRouter>


          <Header />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path="/product/:categoryId" element={<ItemListContainer />} />
            <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<CartView />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path='*' element={<PageNotFound />} />

          </Routes>

          {/*<QueryGpt />*/}

          {/* <MapsApi/> */}



        </BrowserRouter>

      </CartProvider>
    </DarkModeProvider>
  )
}

export default App
