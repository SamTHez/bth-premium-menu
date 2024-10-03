import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DataArea from './components/DataArea'
import Header from './components/Header'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <DataArea />
  </StrictMode>,
)
