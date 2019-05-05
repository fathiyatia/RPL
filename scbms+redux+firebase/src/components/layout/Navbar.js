import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import '../../../src/App.css';
import Logoscbms from '../photo/logoscbms.png';

const Navbar = () => {
  return (
        <div class="up">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
  
            <div class="mw8 center w-100 d-flex flex-column flex-md-row align-items-center p-2 px-md-4 mb-3 bg-white box-shadow">
            <h5 class="logo my-0 mr-md-auto font-weight-normal"><img src={Logoscbms} alt="Asset"/></h5>
            <nav class="my-2 my-md-0 mr-md-3">
                <Link class="menu p-2" to="/"><i class="fa fa-home"></i> &nbsp; Home &nbsp;</Link> 
                <Link class="menu p-2" to="/orderhis"><i class="fas fa-book-open"></i> &nbsp; Reservation &nbsp;</Link> 
                <Link class="menu p-2" to="/account"><i class="fas fa-user-circle"></i> &nbsp; Account &nbsp;</Link>
            </nav>
                <Link class="btn btn-outline-primary" to="/signup">Sign up</Link>
            </div>
            </div>
  )
}

export default Navbar
