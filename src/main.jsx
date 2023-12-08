import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MainRouter from './router/Router'
import 'react-toastify/dist/ReactToastify.css';
import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <MainRouter />
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>
);
