import React, { Component } from 'react';
import logo from '../../../src/logo.svg';
import './Editprofile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

class Editprofile extends Component {
  render() {
    return (
      <div className="Login">
          <div class="login-block">
              <div class="kontainer">

                <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                
                </head>

	                <div class="editprof mw8 center w-100">

                    <h2>Edit My Profile</h2>
            
              
                  <form class="form" action="##" method="post">
                      <div class="">
                          
                          <div class="edit">
                              <label for="first_name"><h4>Name</h4></label>
                              <input type="text" class="form-control" name="first_name" id="first_name" placeholder="name"/>
                          </div>
                      </div>


                      <div class="edit">
                          
                          <div class="">
                              <label for="email"><h4>Email</h4></label>
                              <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com"/>
                          </div>
                      </div>


                      <div class="edit">
                          
                          <div class="">
                              <label for="phone"><h4>Phone</h4></label>
                              <input type="text" class="form-control" name="phone" id="phone" placeholder="phone"/>
                          </div>
                      </div>


                     
                      <div class="edit">
                          
                          <div class="">
                              <label for="password"><h4>Password</h4></label>
                              <input type="password" class="form-control" name="password" id="password" placeholder="new password"/>
                          </div>
                      </div>


                      

                      <div class="edit">
                           <div class="">
                                <br/>
                              	<Link to="/Account"><button class="btn btn-lg btn-success" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> Save</button></Link>
                               	<button class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"></i> Reset</button>
                            </div>
                      </div>
              	</form>
		                
              </div>
            </div>

      </div> 
  </div>)
  }
}

export default Editprofile;
