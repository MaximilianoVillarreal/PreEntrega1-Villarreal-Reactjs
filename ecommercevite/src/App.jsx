import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import './App.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  return (
  <>
  <header>
    <h1>La mejor calidad</h1>
    <Navbar />
  </header>
  <ItemListContainer greeting ={"Productos destacados"} />
  </>
  )
}

export default App
