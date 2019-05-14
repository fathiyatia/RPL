import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect, Link  } from 'react-router-dom'
import moment from 'moment'



const ProjectDetails = (props) => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (project) {
    return (
      <div className="container section project-details navv">
        <div className="row">
          <div className="col s6 m7">
          <div className="card">
            <div className="card-image">
              <img src={project.avatarURL}/>
            </div>
            <div className="card-content navv">
              <span className="card-title navv">{project.name}</span>
              <span className="card-title navv">{project.category}</span>
              <h4 className="card-title navv">Rp. {project.price}</h4>
              <p>{project.content}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
              {/* <div>{moment(project.createdAt.toDate()).calendar()}</div> */}
            </div>
            </div>
          </div>
          </div>
          
          {/* <Link to={'/edit/' + project.id} key={props.id} class="btn btn-sucess">Edit</Link>&nbsp;
          <Link to={'/delete/' + project.id} key={props.id} class="btn btn-danger">Delete</Link>&nbsp;
          <Link to={`/edit/${project.id}`} class="btn btn-success">Edit</Link>&nbsp;
          <Link to={`/delete/${project.id}`} class="btn btn-danger">Delete</Link>&nbsp; */}
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails)
