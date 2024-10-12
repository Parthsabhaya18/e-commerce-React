import React from 'react'
import AdminLogin from './Component/AdminLogin'
import UserLogin from './Component/UserLogin'
import Leading from './Component/Leading'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUpPage from './Component/SignUpPage'
const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Leading/>} />
            <Route path='/adminlogin' element={<AdminLogin/>} />
            <Route path='/userlogin' element={<UserLogin/>} />
            <Route path='/' element={<AdminLogin/>}/>
            <Route path='/JupmLeading' element={<Leading/>}/>
            <Route path='/signUp' element={<SignUpPage/>} />
            <Route path='/Jumplogin' element={<AdminLogin/>} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App;