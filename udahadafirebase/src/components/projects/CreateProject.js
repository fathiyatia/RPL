import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'
import ImageUpload from '../imgupload/ImageUpload'
import FileUploader from 'react-firebase-file-uploader';
import firebase, { db } from '../../config/fbConfig';


class CreateProject extends Component {
  state = {
    name: '',
    category: '',
    gymnasium:'',
    lapanganbasket:'',
    lapanganfutsal:'',
    lapanganbadminton:'',
    address:'',
    price:'',
    phone:'',
    time:'',
    avatarURL:'',
    isUploading: false,
    progress: 0,

  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);q
    this.props.createProject(this.state);
    this.props.history.push('/');
  }

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

  handleProgress = progress => this.setState({ progress });

  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        console.log(url);
        this.setState({ avatarURL: url })
      })
  };

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
            {/* <textarea id="category" className="materialize-textarea" onChange={this.handleChange}></textarea> */}
            {/* <label htmlFor="content">Category</label> */}
            <p>
              <label>
                <input class="with-gap" name="group3" type="radio" value="Gymnasium" id="category" onChange={this.handleChange}/>
                <span>Gymnasium</span>
              </label>
            </p>
            <p>
              <label>
                <input class="with-gap" name="group3" type="radio" value="Lapangan Basket" id="category" onChange={this.handleChange}/>
                <span>Lapangan Basket</span>
              </label>
            </p>
            <p>
              <label>
                <input class="with-gap" name="group3" type="radio" value="Lapangan Futsal" id="category" onChange={this.handleChange}/>
                <span>Lapangan Futsal</span>
              </label>
            </p>
            <p>
              <label>
                <input class="with-gap" name="group3" type="radio" value="Lapangan Badminton" id="category" onChange={this.handleChange}/>
                <span>Lapangan Badminton</span>
              </label>
            </p>
          </div>
          <div className="input-field">
            <textarea id="address" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Address</label>
          </div>
          <div className="input-field">
            <textarea id="price" type="number" min="1" max="1000000" step="any" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Price</label>
          </div>
          <div className="input-field">
            <textarea id="phone" type="tel" className="materialize-textarea" onChange={this.handleChange} maxLength="12"></textarea>
            <label htmlFor="content">Phone Number</label>
          </div>
          {/* <div className="input-field">
            <textarea id="time" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Time</label>
          </div> */}
          <div className="imageupload">
            <label for="avatar">Asset Image:</label>
                <br/>
                  {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                  {this.state.avatarURL && <p className="black-text"> Upload success!</p>}
                  <label style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, pointer: 'cursor'}}>
                      Select your asset image
                    <FileUploader
                      hidden
                      accept="image/*"
                      name="avatar"
                      randomizeFilename
                      storageRef={firebase.storage().ref("images")}
                      onUploadStart={this.handleUploadStart}
                      onUploadError={this.handleUploadError}
                      onUploadSuccess={this.handleUploadSuccess}
                      onProgress={this.handleProgress}
                    />
                  </label>
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
