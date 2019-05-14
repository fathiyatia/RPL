import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import './DetailAsset.css';
import { Button } from 'reactstrap';
import Listitem from './Orderlistitem'
import './Orderlist.css'




export default function TableExample(props) {
    return (
        <div className="container">
        <head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous"/>
         </head>
        <br/>
         <br/>
         <div class="container" className="tabtab white">
         <h3>&nbsp; Order List</h3>
         <br/>
         <div class="container-grid">
                <div class="item-grid"><b>Nama</b></div>
                <div class="item-grid"><b>Tanggal</b></div>
                <div class="item-grid"><b>Jam</b></div>  
                <div class="item-grid"><b>Foto</b></div>
                <div class="item-grid"><b>Status</b></div>
        </div>
        <Listitem/>
        <Listitem/>
        <Listitem/>
        <Listitem/>
     
      
      </div>

</div>
    )
  }


