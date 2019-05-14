import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right navv">
        <li><NavLink to='/' className="navv">Home</NavLink></li>
        <li><NavLink to='/orderhislist'  className="navv">Order History</NavLink></li>
        <li><NavLink to='/create' className="navv">New Asset</NavLink></li>
        <li><a onClick={props.signOut} className="navv">Log Out</a></li>
        <li><NavLink to='/account' className=" btn btn-foating blue lighten-1 center circle"> 
          {props.profile.initials}
        </NavLink></li>
        {/* btn btn-floating red lighten-1 center */}
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
