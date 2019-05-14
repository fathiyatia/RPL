import React from 'react'
import { NavLink } from 'react-router-dom'


const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/signup' className="navv">Sign Up</NavLink></li>
        <li><NavLink to='/signin' className="navv">Sign In</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks