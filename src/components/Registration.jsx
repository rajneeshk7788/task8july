import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

const Register = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [cpass, setCpass] = useState('')

    const nav = useNavigate();


    const handleData = (e) => {
        e.preventDefault();
        const data = {
            fname: fname,
            lname: lname,
            phone: phone,
            email: email,
            pass: pass,
        }
        
        axios.post(`http://localhost:5001/register`, data).then((e) => {

            if (e.data) {
                console.log(data)
                nav('/login',{replace:true})
            }
        })
    }

       

    return (
        <div className='container'>
            <h1>Sign Up Page</h1>
            <div className='main'>
                <div className='main-1'>
                    <div className='main-2'>
                        <div className='img-1'>
                            <div className='img-2'><img src="https://i.im.ge/2022/07/06/u3jGby.png" alt="" /></div>
                            <div><p>Lottery Display</p></div>
                        </div>
                        <div className='main-3'>
                            <div><p>A few clicks away from <br /> creating your Lottery Display</p></div>
                            <div className='main-4'><img src="https://i.im.ge/2022/07/06/uE212q.md.png" alt="" /></div>
                        </div>
                    </div>
                    <div className='form main-form'>
                        <div className='form-item-1'>
                            <p className='p'>Registration</p>
                        </div>
                        <div className='form-item-2'>
                            <p>Manage all your lottery efficiently</p>
                        </div>
                        <div className='form-item-3'>
                            <p>Let's get you all set of so you can verify your personal and begin <br /> setting up your profile.</p>
                        </div>
                        <div >
                            <form action='clear'>
                                <div className='form-item-2'>
                                    <div className='input-box'>
                                        <span className='details'>First Name <span style={{ color: 'red' }}>*</span></span>
                                        <input className="input" type="text" onChange={(e) => setFname(e.target.value)} />
                                    </div>
                                    <div className='input-box'>
                                        <span className='details'>Last Name <span style={{ color: 'red' }}>*</span></span>
                                        <input className="input" type="text" onChange={(e) => setLname(e.target.value)} />
                                    </div>
                                    <div className='input-box'>
                                        <span className='details'>Phone Number <span style={{ color: 'red' }}>*</span></span>
                                        <input className="input" type="text" onChange={(e) => setPhone(e.target.value)} />
                                    </div>
                                    <div className='input-box'>
                                        <span className='details'>Email <span style={{ color: 'red' }}>*</span></span>
                                        <input className="input" type="text" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className='input-box'>
                                        <span className='details'>Password <span style={{ color: 'red' }}>*</span></span>
                                        <input className="input" type="password" onChange={(e) => setPass(e.target.value)} />
                                    </div>
                                    <div className='input-box'>
                                        <span className='details'>Confirm Password <span style={{ color: 'red' }}>*</span></span>
                                        <input className="input" type="password" onChange={(e) => setCpass(e.target.value)} />
                                    </div>
                                </div>
                                <div className='span-1'>
                                    <input type="checkbox" /><span>Yes, I wont to recieve Lottery </span>
                                </div>
                                <div className='span-1'>
                                    <input type="checkbox" /><span>I agree to all the <span style={{ color: 'blue' }}> Term, Privacy Policy </span> and <span style={{ color: 'blue' }}>Fees</span></span>
                                </div>
                                <div className='btn'>
                                    <button onClick={(e) => handleData(e)}>Create Account</button>
                                </div>
                                <div className='p1' >
                                    <p >Allready hane an account? <Link to="/login"><span style={{ color: 'blue' }}>Log in</span></Link> </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;

