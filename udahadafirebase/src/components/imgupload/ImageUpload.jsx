import React, {Component} from 'react';
import {storage} from '../../config/fbConfig';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0
    }
    this.handleImgChange = this.handleImgChange.bind(this);
    this.handleUpload = this.handleImgUpload.bind(this);
  }
  handleImgChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleImgUpload = () => {
      const {image} = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
        })
    });
  }
  render() {
    const style = {
      display: 'flex',
      flexDirection: 'column',                
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (
      <div className="container">
      {/* <progress value={this.state.progress} max="100"/> */}
      <br/>
        <input type="file" accept="image/*" onChange={this.handleImgChange}/>
        <br/>
        <button onClick={this.handleImgUpload}>Upload</button>
        <br/>
        {/* <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/> */}
      </div>
    )
  }
}

export default ImageUpload;