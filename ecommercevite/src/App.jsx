import { ItemListContainer } from './components/ItemListContainer'
import './App.css'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from "./components/NavBar"
import { Inicio } from "./views/Inicio"
import { Error404 } from "./views/Error404"
import { Ayuda } from "./views/Ayuda"
import { ProductDetail } from "./views/ProductDetail"

function App() {
  return (
  <>
  <header>
    <h1>La mejor calidad 😎</h1>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element= {<Inicio/>} />
        <Route path='/Ayuda' element= {<Ayuda/>} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path='/category/:categoryId' element= {<Inicio/>} />
        <Route path='*' element= {<Error404/>} />
      </Routes>
    </BrowserRouter>
  </header>
  <ItemListContainer greeting ={"Productos destacados"} />
  </>
  )
}

export default App
