import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import Gymnas from './gymnas.jpg';
import { Link } from 'react-router-dom'


const Dataasset = (props) => {
    return (
        
        <div>                                  

            <div class="profimg">
                <img src={Gymnas} alt="Profile"/>
                
            </div>    


            <div class="deskripsi">    
                <div class="row">
                    <div class="data">
                        <h5>Nama :</h5>
                    </div>
                    <div class="isidata">
                        <h5>: Gymnasium Mantap Gan</h5>
                        {/* <h5>: {props.project.name}</h5> */}
                    </div>
                </div>

                <div class="row">
                    <div class="data">
                        <h5>Alamat :</h5>
                    </div>
                    <div class="isidata">
                        <h5>: Seberang FMIPA Gan</h5>
                        {/* <h5>: {props.project.address}</h5> */}
                    </div>
                </div>

                <div class="row">
                    <div class="data">
                        <h5>Phone :</h5>
                    </div>
                    <div class="isidata">
                        <h5>: 081287919661</h5>
                        {/* <h5>: {props.project.phone}</h5> */}
                    </div>
                </div>

                <div class="row">
                    <div class="data">
                        <h5>No. Rekening 1</h5>
                    </div>
                    <div class="isidata">
                        <h5>: - </h5>
                    </div>
                </div>

                <div class="row">
                    <div class="data">
                        <h5>No. Rekening 2</h5>
                    </div>
                    <div class="isidata">
                        <h5>: - </h5>
                    </div>
                </div>

                <div class="row">
                    <div class="data">
                        <h5>No. Rekening 3</h5>
                    </div>
                    <div class="isidata">
                        <h5>: -</h5>
                    </div>
                </div>

                <div class="row">
                    <div class="data">
                        <h5>Harga Sewa</h5>
                    </div>
                    <div class="isidata">
                        <h5>: Rp. 150000</h5>
                    </div>
                </div>

                <div class="row">
                    <div class="data">
                        <h5>Pilihan Jam</h5>
                    </div>
                    <div class="isidata">
                        <h5>: 08.00; 10.00; 12.00; 15.00; 18.00; 21.00; 23.00;</h5>
                    </div>
                </div>

                <div class="row">
                    <div class="data">
                        <br/>
                        <button type="button" class="btn btn-danger">Delete Asset</button>               
                    </div>
                    <div>
                    {/* <Link to={'/edit/' + project.id} key={project.id} class="btn btn-sucess">Edit</Link>&nbsp;
                    <Link to={'/delete/' + project.id} key={project.id} class="btn btn-danger">Delete</Link>&nbsp; */}
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
      project: state.firebase.project,
      users: state.firestore.users,
    }
  }
  
export default connect(mapStateToProps)(Dataasset)



//   const mapStateToProps = (state) => {
//     // console.log(state);
//     return{
//       auth: state.firebase.auth,
//       projects: state.firestore.projects,
//     }
//   }
  
//   export default connect(mapStateToProps)(Dataasset)



// const mapStateToProps = (state, ownProps) => {
//     // console.log(state);
//     const id = ownProps.match.params.id;
//     const projects = state.firestore.data.projects;
//     const project = projects ? projects[id] : null
//     return {
//       project: project,
//       auth: state.firebase.auth
//     }
//   }
  
// export default compose(
//     connect(mapStateToProps),
//     firestoreConnect([{
//       collection: 'projects'
//     }])
//   )(Dataasset)

//   const mapStateToProps = (state) => {
//     // console.log(state);
//     return{
//       auth: state.firebase.auth,
//       profile: state.firebase.profile,
    
//     }
//   }
  
//   export default connect(mapStateToProps)(Dataasset)

