import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'

import { Start } from './pages/Start'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { ShowCustomers } from './pages/ShowCustomers'
import { EditCustomer } from './pages/EditCustomer'
import { RegisterCustomer } from './pages/RegisterCustomer'
import { ChooseCustomer } from './pages/ChooseCustomer'
import { ShowHydrometers } from './pages/ShowHydrometers'
import { RegisterHydrometer } from './pages/RegisterHydrometer'
import { EditHydrometer } from './pages/EditHydrometer'
import { Invoice } from './pages/Invoice'


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home/invoice" element={<Invoice />} />
      <Route path="/home" element={<DefaultLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/home/show-customers" element={<ShowCustomers />} />
        <Route path="/home/show-customers/edit-customer/:id" element={<EditCustomer />} />
        <Route path="/home/show-customers/register-customer" element={<RegisterCustomer />} />
        <Route path="/home/choose-customer" element={<ChooseCustomer />} />
        <Route path="/home/choose-customer/show-hydrometers/:id" element={<ShowHydrometers />} />
        <Route path="/home/choose-customer/show-hydrometers/register-hydrometer" element={<RegisterHydrometer />} />
        <Route path="/home/choose-customer/show-hydrometers/edit-hydrometer" element={<EditHydrometer />} />
      </Route> 
    </Routes>
  )
}