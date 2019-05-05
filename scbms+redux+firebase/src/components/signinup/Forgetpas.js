//INI TEMPLATE SIGN IN
import React, { Component } from 'react';
import logo from '../../../src/logo.svg';
import './Forgetpas.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className="Login">
          <div class="login-block">
              <div class="container">
	                <div class="row">
		                <div class="col-md-4 login-sec">
		                      <h2 class="text-center">Forget Password?</h2>
		    
                          <small>Untuk mengatur ulang password, silahkan masukkan email untuk identifikasi akun anda</small>
                          <br/>
                          <br/>
                          
                          <form class="login-form">
                          
                              <div class="form-group">
                                    <label for="exampleInputEmail1" >Email</label>
                                    <input type="email" class="form-control" placeholder="email"/>
                              </div>
                            
                              
                              <div class="form-check">
                                  <button type="submit" class="btn btn-login float-right">Submit</button>
                              </div>

                              
                          </form>
		              </div>

                            <div class="col-md-8 banner-sec">
                                    <div class="carousel-inner" role="listbox"></div>	   	    
	                          </div>
              </div>
            </div>

      </div> 
  </div>)
  }
}

export default Login;
