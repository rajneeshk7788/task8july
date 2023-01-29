import React from 'react'
import {Routes, Route} from'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Registration'
import ResetPassword from './ResetPassword'


const AllRouters = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/resetpassword' element={<ResetPassword/>} ></Route>
        </Routes>
    </div>
  )
}

export default AllRouters;