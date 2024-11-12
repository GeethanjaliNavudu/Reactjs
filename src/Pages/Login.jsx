import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className='Login'>
      <h1>Login page</h1>
   
      <input type='text' placeholder='Enter Email' /> 
      <input type='Password' Placeholder='Enter Password'/>
      <Link to='/Dashboard'><button type="submit">Login</button></Link>
      <p>Don't have an account? <Link to='/Signup'>Sign Up</Link></p>
      </div>

  )
}

export default Login
