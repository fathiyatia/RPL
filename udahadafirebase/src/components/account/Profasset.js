import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Gymnas from './gymnas.jpg'
import { Button } from 'reactstrap';
import Dataasset from './Dataasset';

class Profasset extends Component {
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


                                <div class="grid-it">
                                        <div class="editbtn">
                                        <Link to="/orderlist"><Button color="info" >&nbsp; Order List &nbsp;</Button></Link>
                                        </div>
                                </div>
                    
                                <div class="grid-it">
                                        <div class="editbtn">
                                        <Button color="secondary" >&nbsp; Edit Asset &nbsp;</Button>
                                    </div>
                                </div>    
                        </div>
                                    <hr/>
                        </div>
                    </div>
                </div>
              
 
                <div class="profileisi row">

                    <div class="apakek">
                        <div class="">
                         <Dataasset/>   



                    </div>
                    </div>
                    </div>
                    </div>
                    </div>

    )
  }
}



export default Profasset;
