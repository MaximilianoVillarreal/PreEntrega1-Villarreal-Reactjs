import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {getFirestore, doc, updateDoc, collection, addDoc,} from "firebase/firestore";

import './App.css'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar"
import { ItemListContainer } from './components/ItemListContainer'
import { Error404 } from './components/Error404'
import { ItemDetailContainer } from './components/ItemDetailContainer'


function App() {
  return (
  <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element= {<ItemListContainer greeting= "La mejor calidad 😎" />} />
        <Route path="/category/:id" element={<ItemListContainer greeting= "La mejor calidad 😎" />} />
        <Route path='/items/:id' element= {<ItemDetailContainer/>} />
        <Route path='*' element= {Error404}></Route> 
      </Routes>
    </BrowserRouter>
  </>
  )
  const sendOrder = () => {
    const order = {
      buyer: {
        name: "Maximiliano",
        phone: 1228943,
        email: "max@gmail.com",
      },
      items: [
        { id: 3, title: "bicicleta", price: 200, quantity: 8 },
        { id: 5, title: "gorra", price: 2000, quantity: 6 },
      ],
      total: 13600,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert("Su orden: " + id + " ha sido completada!");
      }
    });
  };

  const buyer = {
    name: "Lucas",
    phone: 3334487,
    email: "lucass@gmail.com",
  };

  const updateOrder = () => {
    const db = getFirestore();
    const orderDoc = doc(db, "orders", "2FA0wF5sKwj7SG1jG4w7");
    updateDoc(orderDoc, {
      total: 333331,
      cuotas: 5,
      buyer: { ...buyer, phone: 55 },
    });
  };

  return (
    <div>
      <button onClick={sendOrder}>ENVIAR ORDEN</button>
      <button onClick={updateOrder}>ACTUALIZAR ORDEN</button>
    </div>
  );
}

export default App
