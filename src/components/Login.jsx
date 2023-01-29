import  axios  from 'axios'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const nav = useNavigate();

  const handleData = (e) => {
    e.preventDefault()
    const data = {
      email: email,
      pass: pass
    }
    if(email && pass){

      axios.post(`http://localhost:5001/login`, data).then((e) =>{
        if(e.data) {
          console.log(data)
          nav('/', { replace: true })
        }
      })
    }
    else{
      alert("All field are required")
    }
   
  }



  return (
    <div className='container1'>
      <h1>Login Page</h1>
      <div className='main1'>
        <div className='main2'>
          <img className='img32' src="https://i.im.ge/2022/07/06/u3mTA6.jpg" alt="" />
          <div className='login1'>
            <div className='login2'>
              <div className='img-5'>
                <div className='img-6' id='img'><img src="https://i.im.ge/2022/07/06/u3mQaz.jpg" alt="" /></div>
                <div style={{ color: 'black' }}><p>Lottery Display</p></div>
              </div>
            </div>
            <div className='login-3'>
              <div className='head'>Login</div>
              <div className='head'>Login to Your Account</div>
              <div className='head1'>Thank You for get back to Lottery Display, let's access out the best recommendation for you</div>
              <div>
                <form >
                  <div>
                    <div className='input-box-1'>
                      <span className='details' >User Name</span>
                      <input className='input' type="text" placeholder='Email or Phone Number' onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='input-box-1'>
                      <span className='details'>Password</span>
                      <input className="input" type="text" placeholder='Password' onChange={(e) => setPass(e.target.value)} />
                    </div>
                    <div className='check'>
                      <div className='span-1'>
                        <input type="checkbox" /><span>Remember me</span>
                      </div>
                      <div ><Link style={{ color: 'blue' }} to='/resetpassword' >Reset Password</Link></div>
                    </div>
                    <div className='btn1'>
                      <button onClick={(e) => handleData(e)} >Log in</button>
                    </div>
                    <div className='p1' >
                      <p >Don't have an account yet? <Link to="/register"><span style={{ color: 'blue' }}>Join Lottery Display</span></Link> </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login;