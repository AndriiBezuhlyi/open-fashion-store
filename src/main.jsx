import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss'

createRoot(document.getElementById('root')).render(<StrictMode>
  <h1>Title</h1>
</StrictMode>)
