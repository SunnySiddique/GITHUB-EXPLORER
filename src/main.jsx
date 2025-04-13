import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import GithubContextProvider from './context/GithubSearchContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GithubContextProvider>
        <App />
      </GithubContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
