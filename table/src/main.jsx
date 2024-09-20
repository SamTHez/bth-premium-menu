import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DataArea from './components/DataArea'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataArea />
  </StrictMode>,
)
