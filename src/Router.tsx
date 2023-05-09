import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { ShowCustomers } from './pages/ShowCustomers'
import { RegisterCustomer } from './pages/RegisterCustomer'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/show-customers" element={<ShowCustomers />} />
        <Route path="/register-customer" element={<RegisterCustomer />} />
      </Route>
    </Routes>
  )
}