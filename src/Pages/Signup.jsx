import React from 'react'
import { Link } from 'react-router-dom'


function Signup() {
  return (
    <div className='Signup'>
      <h1>Sign Up</h1>
      
      <input type='text' placeholder='Enter Username' /> 
     <input type='text' placeholder='Enter Email' /> 
     <input type='Password' Placeholder='Create Password'/>
   <Link to='/'> <button type="submit">Sign Up</button></Link>
     <p>Already have an account? <Link to='/'>Login</Link></p>
     
   </div>
    
  )
}

export default Signup
