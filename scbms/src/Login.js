//INI TEMPLATE SIGN IN
import React, { Component } from 'react';
import logo from './logo.svg';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, withRouter} from 'react-router-dom';
import { compose } from 'recompose';

import { RegisterLink } from './Signup';
import { withFirebase } from './Firebase';
import App from './App';

const LoginPage = () => (
  <div>
    <LoginForm />
    <RegisterLink />
  </div>
);
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class LoginFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = {...INITIAL_STATE};
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(App);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div className="Login">
          <div className="login-block">
              <div className="container">
	                <div className="row">
		                <div className="col-md-4 login-sec">
		                      <h2 className="text-center">Log in</h2>
		    
            
                          <form className="login-form" onSubmit={this.onSubmit}>
                          
                              <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" >Email</label>
                                    <input type="email" className="form-control" placeholder="email" value = {email} name="email" onChange={this.onChange}/>
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputPassword1" >Password</label>
                                <input type="password" className="form-control" placeholder="password" value = {password} name="password" onChange={this.onChange}/>
                              </div>
                              
                              <div className="form-check">
                                  <button type="submit" className="btn btn-login float-right" disabled={isInvalid}>Log in</button>
                              </div>

                              <small>Belum punya akun? <Link className="link blue dim" to="/signup"> Daftar</Link></small>
                              <br/>
                              <small><Link className="b link black dim" to="/forgetpassword"> Forget Password</Link></small>
                              
                              {error && <p>{error.message}</p>}
                          </form>
		              </div>

                            <div className="col-md-8 banner">
                                    <div className="carousel-inner" role="listbox"></div>	   	    
	                          </div>
              </div>
            </div>

      </div> 
  </div>)
  }
}

const LoginForm = compose(
  withRouter,
  withFirebase,
)(LoginFormBase);

export default LoginPage;

export { LoginForm };
