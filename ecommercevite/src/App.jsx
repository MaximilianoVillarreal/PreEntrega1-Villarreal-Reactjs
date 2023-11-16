import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar"
import { ItemListContainer } from './components/ItemListContainer'
import { Error404 } from './components/Error404'


function App() {
  return (
  <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element= {<ItemListContainer greeting= "La mejor calidad 😎" />} />
        <Route path="/category/:id" element={<ItemListContainer greeting= "La mejor calidad 😎" />} />
        <Route path='/items/:id' element= {<div>Detalle</div>} />
        <Route path='*' element= {Error404}></Route> 
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
