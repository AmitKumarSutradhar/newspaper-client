import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Router from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <BrowserRouter>
          <Router></Router>
        </BrowserRouter>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
