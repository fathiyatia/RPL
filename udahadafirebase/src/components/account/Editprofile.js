import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ImageUpload from '../imgupload/ImageUpload'

class Editprofile extends Component {
  state = {

  }

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Edit Profile</h5>

          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>

          {/* <div className="input-field">
            <textarea id="time" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Time</label>
          </div> */}
          <div className="imageupload">
          <label htmlFor="prof-img">Change Profile Photo</label>
            <ImageUpload/>
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>

         
        </form>
      </div>
    )
  }
}



export default Editprofile;
