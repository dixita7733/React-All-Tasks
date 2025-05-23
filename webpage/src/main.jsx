import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../src/Header/Header.css'
import '../src/page/Page.css'
import '../src/usable-component/Border.css'
import '../src/usable-component/Button.css'
import '../src/footer/Fotter.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
