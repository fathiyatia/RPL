import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'
import ImageUpload from '../imgupload/ImageUpload'

class CreateProject extends Component {
  state = {
    name: '',
    category: '',
    address:'',
    photo:'',
    price:'',
    time:''

  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Asset</h5>
          <div className="input-field">
            <input type="text" id='name' onChange={this.handleChange} />
            <label htmlFor="title">Name</label>
          </div>
          <div className="input-field">
            <textarea id="category" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Category</label>
          </div>
          <div className="input-field">
            <textarea id="address" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Address</label>
          </div>
          <div className="input-field">
            <textarea id="price" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Price</label>
          </div>
          {/* <div className="input-field">
            <textarea id="time" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Time</label>
          </div> */}
          <div className="imageupload">
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

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
