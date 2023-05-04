import React from 'react'
import ReactDOM from 'react-dom/client'

import { Home } from './pages/Home/index.tsx'
import { Login } from './pages/Login/index.tsx';

import './global.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
)
