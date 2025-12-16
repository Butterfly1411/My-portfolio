import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap-icons/font/bootstrap-icons.css";
import StarsBackground from './components/StartsBackground.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div className="relative">
      <StarsBackground />
      <div className="relative z-10">
        <App />
      </div>
    </div>
  </StrictMode>,
)
