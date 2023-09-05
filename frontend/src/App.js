import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './auth/containers/Home'
import Signup from './auth/containers/Signup'
import Login from './auth/containers/Login'
import Activate from './auth/containers/Activate'
import ResetPassword from './auth/containers/ResetPassword'
import ResetPasswordConfirm from './auth/containers/ResetPasswordConfirm'
import Layouts from './hoc/Layouts'
import Google from './auth/containers/Google'

function App() {
  return (
  
      <Router>
      <Layouts>
      <Routes>
       <Route exact path='/' element={<Home />} />
       <Route exact path='/login' element={<Login />} />
       <Route exact path='/signup' element={<Signup />} />
       <Route exact path='/google' element={<Google/>} />
        {/* connected to the activate url in djoser in setting.py file */}
       <Route exact path='/activate/:uid/:token' element={<Activate />} />
       <Route exact path='/reset-password' element={<ResetPassword />} />
       {/* connected to the password reset confirm url in djoser in setting.py file */}
       <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />} />
      </Routes>
      </Layouts>
      
    </Router>
    
  )
}

export default App