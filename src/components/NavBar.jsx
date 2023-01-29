import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav'>
        <div>
            <Link to='/' >Home</Link>
        </div>
        <div className='app-1'>
            <Link to='/register' >Register</Link>
        </div>
        <div>
            <Link to='/login' >Login</Link>
        {/* </div>
        <div> */}
            <Link to='/resetpassword' ></Link>
        </div>
    </div>
  )
}

export default NavBar