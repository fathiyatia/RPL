import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ImageUpload from '../imgupload/ImageUpload'
import firebase, { db } from '../../config/fbConfig';

class Editprofile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key:'',
      // email: '',
      firstName: '',
      lastName: '',
      // profpicURL:''
    };
  }

  componentDidMount() {
    const ref = db.collection('users').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const user = doc.data();
        this.setState({
          key: doc.id,
          // title: board.title,
          // description: board.description,
          // author: board.author,
          // email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          // profpicURL: user.profpicURL
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({board:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { firstName, profpicURL, lastName } = this.state;

    const updateRef = firebase.firestore().collection('users').doc(this.state.key);
    updateRef.update({
      // title,
      // description,
      // author,
      // email,
      firstName,
      lastName,
      // profpicURL
    }).then((docRef) => {
      this.setState({
        // key: '',
        // title: '',
        // description: '',
        // author: '',
        // email:'',
        firstName:'',
        lastName:'',
        // profpicURL:''
      });
      this.props.history.push("/dataacc/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }


  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Edit Profile</h5>
{/* 
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' onChange={this.handleChange} />
          </div> */}

          <div class="form-group">
            <label for="firstName">First Name:</label>
            <input type="text" class="form-control" name="firstName" value={this.state.firstName} onChange={this.onChange} placeholder="First Name" />
          </div>

          <div class="form-group">
            <label for="lastName">Last Name:</label>
            <input type="text" class="form-control" name="lastName" value={this.state.lastName} onChange={this.onChange} placeholder="Last Name" />
          </div>
{/* 
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div> */}

          {/* <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div> */}

          {/* <div className="input-field">
            <textarea id="time" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Time</label>
          </div> */}
          {/* <div className="imageupload">
          <label htmlFor="prof-img">Change Profile Photo</label>
            <ImageUpload />
          </div> */}


            <button type="submit" className="btn pink lighten-1">Update</button>
        </form>
      </div>
    )
  }
}



export default Editprofile;


