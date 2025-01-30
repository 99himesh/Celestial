import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from './store/store.js';
import "./assets/fonts/WoodfordBournePro-Bold.ttf"
import "./assets/fonts/WoodfordBournePro-Thin.ttf"
import "./assets/fonts/WoodfordBournePro-Regular.ttf"
import "./assets/fonts/WoodfordBournePro-Italic.ttf"
import "./assets/fonts/WoodfordBournePro-ThinItalic.ttf"
import "./assets/fonts/WoodfordBournePro-ExtraLight.ttf"
import "./assets/fonts/WoodfordBournePro-BoldItalic.ttf"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
