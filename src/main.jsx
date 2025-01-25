import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux'
import { store } from './redux/store.js'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
   /* </StrictMode>, */
  // <Provider store={store}>
  // <BrowserRouter>

  // <GoogleOAuthProvider clientId="628224003870-qktv102nq7k27i7p53bnfufgdhr3arpe.apps.googleusercontent.com">
  // <App />
    /* </GoogleOAuthProvider>;
  <ToastContainer />
  </BrowserRouter>
  </Provider>, */
)
