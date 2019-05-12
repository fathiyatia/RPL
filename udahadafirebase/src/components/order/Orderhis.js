import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import { Button } from 'reactstrap';
import './orderhislist.css'
import { Link } from 'react-router-dom';


class Orderhis extends Component {
  render() {
    return (
       
       <div class="container" className="white">
     <div class="row">
    <div class="col s12 m6 w-50">
    <div class="itemgr">
      <div class="card #283593 indigo darken-3">
        <div class="card-content white-text">
          <span class="card-title">Gymnasium IPB</span>
          <br/>
          <p class="isihis">09 Mei 2019</p>
          <p class="isihis">Sudah DIbayar</p>
        </div>
        <div class="card-action">
          <Link to="/orderdet"><a>See Details</a></Link>
        </div>
      </div>
    </div>
    </div>
  </div>
       
       </div>
        
    )
  }
}


export default Orderhis;
