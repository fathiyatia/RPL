import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tab from './Tab';
import AssetInfo from './AssetInfo';
import './DetailAsset.css';
import './AssetInfo.css'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import firebase, { db } from '../../config/fbConfig';

const DetailAsset = (props) => {
  console.log(firebase.auth().currentUser.uid) 
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (project) {
    return (
      <div className="container">
      <br/>
       <br/>
       <div class="container" className="tabtab white">
       <br/>
              <div className="project-list section navv">
              {/* { project && project.map(project => {
                return ( */}
                <div className="container">

                <h3>{project.name}</h3>

                <br/>  
                <div class="semua">

                <div class="buatgambar">
                    <img src={project.avatarURL} alt="Profile" class="responsive-img" class="materialboxed" width="100%" height="auto"/>
                </div>    


                <div class="buatdeskripsi">    
                <div class="row">
                    <div class="des1">
                        <h5><b> Alamat</b></h5>
                    </div>
                    <div class="des2">
                        <h5>: {project.address}</h5>
                    </div>
                </div>

                <div class="row">
                    <div class="des1">
                        <h5><b> Contact Person </b></h5>
                    </div>
                    <div class="des2">
                        <h5>: {project.phone}</h5>
                    </div>
                </div>

                <div class="row">
                    <div class="des1">
                        <h5><b> Harga</b></h5>
                    </div>
                    <div class="des2">
                        <h5>: {project.price}</h5>
                    </div>
                </div>

                </div>


                </div>
                            
                    </div>
            {/* )
          })} */}
          </div>
       <br/>
       <br/>
       <br/>
       <br/>
       <Tab />

       </div>

      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading asset...</p>
      </div>
    )
  }
}





// class DetailAsset extends Component {
//   render() {
//     const { projects, auth } = this.props;
//     if (!auth.uid) return <Redirect to='/signin' /> 
//     return (
//       <div className="container">
//       <br/>
//        <br/>
//        <div class="container" className="tabtab white">
//        <br/>
//        <AssetInfo projects={projects}/>
//        <br/>
//        <br/>
//        <br/>
//        <br/>
//        <Tab />

//        </div>

//       </div>
//     )
//   }
// }



const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const users = state.firestore.data.users
  const project = projects ? projects[id] : null
  const user = users ? users[id] : null
  return {
    project: project,
    auth: state.firebase.auth,
    user: user,
    notifications: state.firestore.ordered.notifications,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc']},

  ])
)(DetailAsset)
