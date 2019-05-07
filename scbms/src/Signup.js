//INI TEMPLATE SIGN IN
import React, { Component } from 'react';
import logo from './logo.svg';
import './Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, withRouter} from 'react-router-dom';
import { withFirebase } from './Firebase';
import App from './App'; 
import { compose } from 'recompose';
import firebase from './Firebase/Firebase';
import { formatWithOptions } from 'util';


const RegisterPage = () => (
  <div>
    <RegisterFormBase/>
  </div>
)
const InitialState = {
  name: '',
  email:'',
  password:'',
  error:null
};

class RegisterFormBase extends Component {
  constructor(props){
    super(props);

    this.state={InitialState};
  }
  onSubmit = event => {
    const { name, email, password } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser =>{
        this.setState(InitialState);
        this.props.history.push(App)
      })
      .catch(error => {
        this.setState({ error });
      });

      event.preventDefault();
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const {
      name,
      email,
      password,
      error,
    } = this.state;

  const isInvalid = 
    password === '' ||
    email === '' ||
    name === '';

    return (
      <div className="Login">
          <div className="login-block">
              <div className="container">
	                <div className="row">
		                <div className="col-md-4 login-sec">
		                      <h2 className="text-center">Sign up</h2>
		    
            
                          <form className="login-form" onSubmit={this.onSubmit}>

                              <div className="form-group">
                                    <label htmlFor="exampleInputName">Name</label>
                                    <input  type="text" 
                                            className="form-control" 
                                            placeholder="name" 
                                            value={this.state.value} 
                                            onChange={this.onChange} 
                                            name="name"/>
                              </div>

                              <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" >Email</label>
                                    <input type="email" className="form-control" placeholder="email" value={this.state.value} onChange={this.onChange} name="email"/>
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputPassword1" >Password</label>
                                <input type="password" className="form-control" placeholder="password" value={this.state.value} onChange={this.onChange} name="password"/>
                              </div>
                              
                              <div className="form-check">
                                  <button type="submit" className="btn btn-login float-right" disabled={isInvalid}>Submit</button>
                              </div>

                              <small>Sudah punya akun? <Link className="link blue dim" to="/login"> Log in</Link></small>
                        
                              {error && <p>{error.message}</p>}
                          </form>
		              </div>

                            <div className="col-md-8 banner-sec">
                                    <div className="carousel-inner" role="listbox"></div>	   	    
	                          </div>
              </div>
            </div>

      </div> 
  </div>
  );
  }
}


const RegisterLink = () => (
  <small>Belum punya akun? <Link className="link blue dim" to="/signup"> Daftar</Link></small>

)

const RegisterForm = compose(
  withRouter,
  withFirebase,
)(RegisterFormBase);


export default RegisterPage;

export { RegisterFormBase, RegisterLink };
