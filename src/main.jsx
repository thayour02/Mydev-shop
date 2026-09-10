import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import AppModern from './AppModern.jsx'
import { BrowserRouter } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-out'
});

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppModern />
  </BrowserRouter>    
)
