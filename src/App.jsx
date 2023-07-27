import { Header } from './components/Header/Header'
import 'tailwindcss/tailwind.css'
import '@tailwindcss/ui/dist/tailwind-ui.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import MapsApi from './components/MapsApi/MapsApi'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { PageNotFound } from './components/PageNotFound/PageNotFound'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './contex/CartContext'
import { DarkModeProvider } from './contex/DarkModeContext'
import './App.css'



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
              <Route path='*' element={<PageNotFound />} />
            </Routes>

            {/*<QueryGpt />*/}

            {/* <MapsApi/> */}

            <Footer />
          
        </BrowserRouter>

      </CartProvider>
    </DarkModeProvider>
  )
}

export default App
