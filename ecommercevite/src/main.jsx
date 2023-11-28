import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyAPmZhr5cdQHU_JLsu4OoaOrtGKLnoxkUI",
  authDomain: "proyecto-coder-reactjs-26a0c.firebaseapp.com",
  projectId: "proyecto-coder-reactjs-26a0c",
  storageBucket: "proyecto-coder-reactjs-26a0c.appspot.com",
  messagingSenderId: "214837758555",
  appId: "1:214837758555:web:ebfca5a06657497ef5cd7e"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
