import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import { ThemeProvider } from "@material-tailwind/react";



ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
     <App />
    </ThemeProvider>
  
)
