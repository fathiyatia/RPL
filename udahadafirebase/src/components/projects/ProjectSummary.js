import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import firebase, { db } from '../../config/fbConfig';
import "../../index.css"

const ProjectSummary = ({project, order}) => {
  return (
    <div className="card z-depth-0 project-summary navv">
      <div className="card-image">
        <img src={project.avatarURL} class="responsive-img"/>
      </div>
      <div className="card-content grey-text text-darken-3 navv">
      <span className="card-title navv">{project.name}</span>
      <span className="card-title navv">{project.address}</span>
        <p>Created by {project.authorFirstName} {project.authorLastName}</p>
        <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
        <br/>
        {project.authorId === firebase.auth().currentUser.uid ?
        <Link to={'/edit/' + project.id} key={project.id} class="btn blue lighten-2 white-text navv" waves-effect waves-light>Edit</Link> : null}
        &nbsp;&nbsp;
        {project.authorId === firebase.auth().currentUser.uid ?
          <Link to={'/delete/' + project.id} key={project.id} class="btn btn-danger navv" waves-effect waves-light>Delete</Link> : null}
        &nbsp;&nbsp;<Link to={'/detailasset/'  + project.id} key={project.id} class="btn green darken-1 white-text navv " waves-effect waves-light>Order</Link>&nbsp;&nbsp;
      </div>
      
    </div>
  )
}

export default ProjectSummary
