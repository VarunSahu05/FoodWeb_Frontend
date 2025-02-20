import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowseRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowseRouter>

  <StoreContextProvider>
  <App/>
  </StoreContextProvider>
  </BrowseRouter>
)
