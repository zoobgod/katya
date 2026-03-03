import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

const REDIRECT_PATH_KEY = 'katya-spa-redirect-path'

// Restore deep-link path after static-host 404 fallback redirect.
if (typeof window !== 'undefined') {
  const redirectedPath = window.sessionStorage.getItem(REDIRECT_PATH_KEY)
  if (redirectedPath) {
    window.sessionStorage.removeItem(REDIRECT_PATH_KEY)
    const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`
    if (redirectedPath !== currentPath) {
      window.history.replaceState(null, '', redirectedPath)
    }
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
