import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import Photoprof from './photoprof.jpg';
import { Link } from 'react-router-dom'

const Dataacc = (props) => {
    return (
        
        <div>
            <div class="profimg">
            <img src={Photoprof} alt="Profile"/>
            </div>      


            <div class="deskripsi">    
            <div class="row">
                <div class="data">
                    <h5>Nama</h5>
                </div>
                <div class="isidata">
                    <h5>: {props.profile.firstName} {props.profile.lastName}</h5>
                </div>
            </div>

            <div class="row">
                <div class="data">
                    <h5>Email</h5>
                </div>
                <div class="isidata">
                    <h5>: {props.auth.email}</h5>
                </div>
            </div>

            <div class="row">
                <div class="data">
                    <h5>Phone</h5>
                </div>
                <div class="isidata">
                    <h5>: {props.profile.phone}</h5>
                </div>
                <br/>
                <br/>
                <br/>
                <div>
                    <Link to={'/editprofile/' + props.auth.uid} key={props.profile.userId} class="btn grey darken-1 white-text">Edit</Link>&nbsp;
                </div>
            </div>
            
            </div>
            </div>
   
    )
  }


  const mapStateToProps = (state) => {
    // console.log(state);
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile,
      users: state.firestore.users,
    }
  }
  
  export default connect(mapStateToProps)(Dataacc)

