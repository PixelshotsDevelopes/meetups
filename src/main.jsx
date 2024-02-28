import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import {FavoritesContextProvider} from './store/favorites-context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesContextProvider>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </FavoritesContextProvider>
</React.StrictMode>, 
)
