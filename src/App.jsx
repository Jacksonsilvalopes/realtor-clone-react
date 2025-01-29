import { BrowserRouter, Routes } from 'react-router'

import './App.css'
import { Route } from 'react-router'
import Home from './Pages/Home'
import Offers from './Pages/Offers'
import Profile from './Pages/Profile'
import ForgotPassword from './Pages/ForgotPassword'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sing-up" element={<SignUp/>} />
      
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
