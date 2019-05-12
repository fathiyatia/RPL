import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import Home from './components/dashboard/Home';
import EditProject from './components/projects/EditProject'
import DetailAsset from './components/order/DetailAsset'
import Account from './components/account/Account'
import Editprofile from './components/account/Editprofile'
import Konfirmasi from './components/order/Konfirmasi'
import Orderdet from './components/order/OrderDet'
import Orderlist from './components/order/OrderList'
import Orderhislist from './components/order/Orderhislist'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
            <Route path='/home' component={Home} />
            <Route path='/edit' component={EditProject} />
            <Route path='/detailasset' component={DetailAsset} />
            <Route path='/account' component={Account} />
            <Route path='/editprofile' component={Editprofile} />
            <Route path='/konfirmasi' component={Konfirmasi} />
            <Route path='/orderdet' component={Orderdet} />
            <Route path='/orderlist' component={Orderlist} />
            <Route path='/orderhislist' component={Orderhislist} />
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
