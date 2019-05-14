import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import Tab from './Tab';
import './DetailAsset.css';
import './AssetInfo.css';
import Gymnas from './gymnas.jpg';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


const AssetInfo = ({project}) => {
    console.log(project)
    return (
        <div className="project-list section navv">
      {/* { project && project.map(project => {
        return ( */}
        <div className="container">

        <h3>{project.name}</h3>

        <br/>  
        <div class="semua">

        <div class="buatgambar">
            <img src={project.avatarURL} alt="Profile" class="responsive-img"/>
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
)
}
  
export default AssetInfo

{/* //   const mapStateToProps = (state, ownProps) => {
//     // console.log(state);
//     const id = ownProps.match.params.id;
//     const projects = state.firestore.data.projects;
//     const project = projects ? projects[id] : null
//     return {
//       project: project,
//       auth: state.firebase.auth
//     }
//   }
  
//   export default compose(
//     connect(mapStateToProps),
//     firestoreConnect([{
//       collection: 'projects'
//     }])
//   )(AssetInfo) */}


  




{/* // class AssetInfo extends Component {
//   render() {
//     return (
//       <div className="container">

//                         <h3>Gymnasium IPB</h3>

//                         <br/>  
//                         <div class="">

//                         <div class="buatgambar">
//                             <img src={Gymnas} alt="Profile"/>
//                         </div>    


//                         <div class="buatdeskripsi">    
//                         <div class="row">
//                             <div class="des1">
//                                 <h5><b> Alamat</b></h5>
//                             </div>
//                             <div class="des2">
//                                 <h5>: Jl. Dramaga XXX</h5>
//                             </div>
//                         </div>

//                         <div class="row">
//                             <div class="des1">
//                                 <h5><b> Contact Person </b></h5>
//                             </div>
//                             <div class="des2">
//                                 <h5>: 085776554583888</h5>
//                             </div>
//                         </div>

//                         <div class="row">
//                             <div class="des1">
//                                 <h5><b> Harga</b></h5>
//                             </div>
//                             <div class="des2">
//                                 <h5>: Rp100.000</h5>
//                             </div>
//                         </div>

//                         </div>


//                         </div>
                                    
//                             </div>
//     )
//   }
// }

// export default AssetInfo; */}
