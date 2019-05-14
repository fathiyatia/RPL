import React, { Component } from 'react';
import firebase, { db } from '../../config/fbConfig';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import FileUploader from 'react-firebase-file-uploader';

class EditProject extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key:'',
      name: '',
      category:'',
      address:'',
      price:'',
      avatarURL:'',
      isUploading: false,
      progress: 0,

    };
  }

  componentDidMount() {
    const ref = db.collection('projects').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const asset = doc.data();
        this.setState({
          key: doc.id,
          // title: board.title,
          // description: board.description,
          // author: board.author,
          name: asset.name,
          category: asset.category,
          address: asset.address,
          price: asset.price,
          avatarURL: asset.avatarURL,

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

    const {  name, category, address, price, avatarURL } = this.state;

    const updateRef = firebase.firestore().collection('projects').doc(this.state.key);
    updateRef.update({
      // title,
      // description,
      // author,
      name,
      category,
      address,
      price,
      // photo
      avatarURL,

    }).then((docRef) => {
      this.setState({
        // key: '',
        // title: '',
        // description: '',
        // author: '',
        name: '',
        category:'',
        address:'',
        price:'',
        // photo:''
        avatarURL:'',

      });
      this.props.history.push("/project/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
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
      .then(url => this.setState({ avatarURL: url }));
  };

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          {/* <div class="panel-heading">
            <h3 class="panel-title">
              Edit Asset
            </h3>
          </div> */}
          <div class="panel-body">
            {/* <h4><Link to={'/project/' + this.props.match.params.id}  class="btn btn-primary">Board List</Link></h4> */}
            <form className="white" onSubmit={this.onSubmit}>
            <h5 className="grey-text text-darken-3">Edit Asset</h5>
              {/* <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" class="form-control" name="description" value={this.state.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div class="form-group">
                <label for="author">Author:</label>
                <input type="text" class="form-control" name="author" value={this.state.author} onChange={this.onChange} placeholder="Author" />
              </div> */}
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={this.state.name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="category">Category:</label>
                <input type="text" class="form-control" name="category" value={this.state.category} onChange={this.onChange} placeholder="Category" />
              </div>
              <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" class="form-control" name="address" value={this.state.address} onChange={this.onChange} placeholder="Address" />
              </div>
              <div class="form-group">
                <label for="price">Price:</label>
                <input type="number" min="1" max="100000" step="any" class="form-control" name="price" value={this.state.price} onChange={this.onChange} placeholder="Price" />
              </div>
              <div>
                <label for="avatar">Asset Image:</label>
                <br/>
                  {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                  {this.state.avatarURL && <p className="black-text"> Upload success!</p>} />}
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
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProject;

// const mapStateToProps = (state, ownProps) => {
//   // console.log(state);
//   const id = ownProps.match.params.id;
//   const projects = state.firestore.data.projects;
//   const project = projects ? projects[id] : null
//   return {
//     project: project,
//     auth: state.firebase.auth
//   }
// }

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([{
//     collection: 'projects'
//   }])
// )(EditProject)
