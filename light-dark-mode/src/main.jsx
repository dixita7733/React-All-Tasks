import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../src/Header/Header.css'
import '../src/bg-color/Bgcolor.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
