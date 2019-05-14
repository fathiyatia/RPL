import React, { Component } from 'react';
import firebase from '../../config/fbConfig';
import { Link } from 'react-router-dom';

class Delete extends Component {

  constructor(props) {
    super(props);
    this.state = {
      asset: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('projects').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          asset: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('projects').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
            <div>
            <br/>
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Yakin?</button>
            </div>
    );
  }
}

export default Delete;