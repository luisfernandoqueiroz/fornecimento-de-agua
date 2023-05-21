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
      <Route path="/start" element={<Start />} />
      <Route path="/login" element={<Login />} />
      <Route path="/invoice" element={<Invoice />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/show-customers" element={<ShowCustomers />} />
        <Route path="/show-customers/edit-customer" element={<EditCustomer />} />
        <Route path="/show-customers/register-customer" element={<RegisterCustomer />} />
        <Route path="/choose-customer" element={<ChooseCustomer />} />
        <Route path="/choose-customer/show-hydrometers" element={<ShowHydrometers />} />
        <Route path="/choose-customer/show-hydrometers/register-hydrometer" element={<RegisterHydrometer />} />
        <Route path="/choose-customer/show-hydrometers/edit-hydrometer" element={<EditHydrometer />} />
      </Route> 
    </Routes>
  )
}