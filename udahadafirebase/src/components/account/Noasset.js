import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Gymnas from './gymnas.jpg'
import { Button } from 'reactstrap';



class Noasset extends Component {
  render() {
    return (
        <div className="">
                <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="profile-head">
                        <div class="grid-conta">
                                <div class="grid-it"> 
                                        <h4>My Asset</h4>
                                        <br/>
                                </div>  
                        </div>
                                    <hr/>
                        </div>
                    </div>
                </div>
              
 
                <div class="profileisi row">

                    <div class="apakek">
                        <div class="">
                            <div className="garis">
                       
                            <br/>
                            <h2>&nbsp; You don't have asset yet, try to create one? &nbsp; <Link to="/"><button type="button" class="btn btn-success">Create</button></Link></h2>
                          
                           
                            </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
       
    )
  }
}



export default Noasset;
