import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import ItemList from './components/ItemList'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <ItemList />
  </StrictMode>,
)
