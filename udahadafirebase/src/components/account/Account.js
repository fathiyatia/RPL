import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Profasset from './Profasset';
import Dataacc from './Dataacc';
import Noasset from './Noasset';
import './Account.css';
import Gymnas from './gymnas.jpg';
import { Button } from 'reactstrap';


class Account extends Component {
  render() {
    const { auth} = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
  
      
    return (
      <div className="container">
      <br/>
       <br/>
       <div class="container" className="akun white">
       <div className="">
      <div class="">

        <div class="">
                <div class="row">
                    <div class="col-md-12">
                        <div class="profile-head">

                            <div class="grid-conta">
                            <div class="grid-it"> 
                                    <h4>My Profile</h4>
                                    <br/>
                            </div>

                            <div class="grid-it">
                                    <div class="editbtn">
                                    <Link to="/orderhislist"><Button color="info">Order History</Button></Link>
                                    </div>
                            </div>
                            
                            <div class="grid-it">
                                    <div class="editbtn">
                                    <Link to="/editprofile"><Button color="secondary">Edit Profile</Button></Link>
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

                        <Dataacc/>

                        </div>
                    </div>
                </div>
                
                <br/>
                <br/>
                <div>

                <div class="row">

                <Profasset/>
                
                </div>
                      
        </div>

    </div>
</div> 
      

</div>

</div> 
</div> 

    )
  }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      auth: state.firebase.auth
    }
  }
  
  export default compose(
    connect(mapStateToProps)
  )(Account)
  