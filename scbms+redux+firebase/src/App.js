import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Home'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'

import React, {Component, Fragment} from 'react';
import Home from './components/dashboard/Home';
import Login from './components/siginup/Login';
import Signup from './components/siginup/Signup';
import Forgetpas from './components/siginup/Forgetpas';
import Account from './components/account/Account';
import Editprofile from './components/account/Editprofile';
import Editasset from './components/accountEdittasset';
import Tampilansewa from '.components/orders/Tampilansewa';
import Cardgymnas from './components/cards/Cardgymnas';
import Cardbasket from './components/cards/Cardbasket';
import Cardfutsal from './components/cards/Cardfutsal';
import Cardbad from './components/cards/Cardbad';
import Orderlist from './components/orders/Orderlist';
import Orderdet from '.components/orders/Orderdet';
import Orderhis from './components/orders/Orderhis';
import Konfirm from './components/orders/Konfirmasi';
import Rincian from './components/orders/Rincian';
import Success from './components/orders/Success';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Fragment>
        <div className="App">
          <Navbar />
          <Switch>

            <Route exact path='/'component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />


            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/forgetpassword" component={Forgetpas}/>
            <Route path="/account" component={Account}/>
            <Route path="/editprofile" component={Editprofile}/>
            <Route path="/editasset" component={Editasset}/>
            <Route path="/tampilansewa" component={Tampilansewa}/>
            <Route path="/cardgymnas" component={Cardgymnas}/>
            <Route path="/cardbasket" component={Cardbasket}/>
            <Route path="/cardfutsal" component={Cardfutsal}/>
            <Route path="/cardbad" component={Cardbad}/>
            <Route path="/orderlist" component={Orderlist}/>
            <Route path="/orderdet" component={Orderdet}/>
            <Route path="/orderhis" component={Orderhis}/>
            <Route path="/konfirmasi" component={Konfirm}/>
            <Route path="/rincian" component={Rincian}/> 
            <Route path="/success" component={Success}/>     
          </Switch>
        </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
