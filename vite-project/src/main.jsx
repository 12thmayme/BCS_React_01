import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HeaderHome from './components/HeaderHome';
import Footer from './components/Footer.jsx';
import Body from './components/Body.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <HeaderHome/>
      <Body/>
      <Footer />
    </div>
  </StrictMode>
);
