import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import { Button } from 'reactstrap';
import './Orderlist.css'

class Orderlistitem extends Component {
  render() {
    return (
      <div class="container-grid">
            <div class="item-grid">Fathiya</div> 
            <div class="item-grid">12 Maret 2019</div> 
            <div class="item-grid">19.00</div> 
            <div class="item-grid">(insert photo here)</div> 
            <div class="item-grid"><Button color="primary" size="sm">Accepted</Button>&nbsp;<Button color="danger" size="sm"> Denied </Button></div>  
      </div>
    )
  }
}


export default Orderlistitem;
