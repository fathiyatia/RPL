//INI TEMPLATE SIGN IN
import React, { Component } from 'react';
import logo from './logo.svg';
import './Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

class Login extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  handleChange = (evt) =>{
    this.setState({
      [evt.target.id]: evt.target.value
    })
  }

  handleSubmit = (evt) =>{
    evt.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="Login">
          <div class="login-block">
              <div class="container">
	                <div class="row">
		                <div class="col-md-4 login-sec">
		                      <h2 class="text-center">Sign up</h2>
		    
            
                          <form onSubmit={this.handleSubmit} class="login-form">

                              <div class="form-group">
                                    <label for="exampleInputName" >Name</label>
                                    <input type="text" class="form-control" placeholder="name" id="name" onChange={this.handleChange}/>
                              </div>

                              <div class="form-group">
                                    <label for="exampleInputEmail1" >Email</label>
                                    <input type="email" class="form-control" placeholder="email" id="email" onChange={this.handleChange}/>
                              </div>
                              <div class="form-group">
                                <label for="exampleInputPassword1" >Password</label>
                                <input type="password" class="form-control" placeholder="password" id="password" onChange={this.handleChange}/>
                              </div>
                              
                              <div class="form-check">
                                  <button type="submit" class="btn btn-login float-right">Submit</button>
                              </div>

                              <small>Sudah punya akun? <Link class="link blue dim" to="/login"> Log in</Link></small>
                         
                  
                              
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
