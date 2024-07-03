import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './Porvider/AuthProviders'
import {HelmetProvider } from 'react-helmet-async';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <HelmetProvider>
     <AuthProvider> 
    <QueryClientProvider client={queryClient}> 
    <RouterProvider router={Routes}> </RouterProvider>
    </QueryClientProvider>
    </AuthProvider>
    <Toaster />
     </HelmetProvider>
    
  </React.StrictMode>,
)
