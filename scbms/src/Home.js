import React, {Component, Fragment} from 'react';
import App from './App';
import Login from './Login';
import Signup from './Signup';
import Forgetpas from './Forgetpas';
import Account from './Account';
import Editprofile from './Editprofile';
import Editasset from './Edittasset';
import Tampilansewa from './Tampilansewa';
import Cardpage from './CardPage';
import Orderlist from './Orderlist';
import Orderdet from './Orderdet';
import Orderhis from './Orderhis';
import Template from './Template';
import './Home.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';



class Home extends Component{
    render(){
        return(
            <BrowserRouter>
            <Fragment>
            <div class="up">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
  
            <div class="mw8 center w-100 d-flex flex-column flex-md-row align-items-center p-2 px-md-4 mb-3 bg-white box-shadow">
            <h5 class="logo my-0 mr-md-auto font-weight-normal">SCBMS</h5>
            <nav class="my-2 my-md-0 mr-md-3">
                <Link class="menu p-2" to="/"><i class="fa fa-home"></i> &nbsp; Home &nbsp;</Link> 
                <Link class="menu p-2" to="/orderhis"><i class="fas fa-book-open"></i> &nbsp; Reservation &nbsp;</Link> 
                <Link class="menu p-2" to="/account"><i class="fas fa-user-circle"></i> &nbsp; Account &nbsp;</Link>
            </nav>
                <Link class="btn btn-outline-primary" to="/signup">Sign up</Link>
            </div>
            </div>

                <Route path="/" exact component={App}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/forgetpassword" component={Forgetpas}/>
                <Route path="/account" component={Account}/>
                <Route path="/editprofile" component={Editprofile}/>
                <Route path="/editasset" component={Editasset}/>
                <Route path="/tampilansewa" component={Tampilansewa}/>
                <Route path="/cardpage" component={Cardpage}/>
                <Route path="/orderlist" component={Orderlist}/>
                <Route path="/orderdet" component={Orderdet}/>
                <Route path="/orderhis" component={Orderhis}/>
                <Route path="/template" component={Template}/>
                
            </Fragment>
            </BrowserRouter>
        )
    }
}

export default Home;