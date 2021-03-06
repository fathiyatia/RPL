import React, { Component } from 'react';
import './Cardgymnas.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './material.min.css';
import './material.css';
import './material.min.css.map';
import Homee from './gymnas.jpg';
import Home from './homepage1.jpg';
import {Link} from 'react-router-dom';

const Card = (props) =>{
    return (
                    <div class="card">
                    <img class="card-img-top" src={Homee} alt="Card image cap"/>
                    <div class="card-body">
                        <h4 class="card-title">Gymnasium IPB</h4>
                        <h6>Jl. Raya Dramaga XXX no XIV</h6>
                        <h6>08123456722</h6>
                        <Link to="/tampilansewa" class="btn btn-primary">See Details</Link>
                    </div>
                    </div>
    );
}



class Cardgymnas extends Component {
  render() {
    return (
      <div className="Login">
          <div class="login-block">
              <div class="kontainer">

                <head>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="./material.min.css"/>
                    <script src="./material.min.js"></script>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
                </head>

	                <div class="editprof center mw8 center w-100">
                    <div class="dropdown2">
                        <button class="dropbutton2">Gymnasium &emsp;  <i class="fa fa-angle-double-down" aria-hidden="true"></i></button>
                                <div class="dropdown-content">
                                            <Link class="item" to="/Cardbasket">Lapangan Basket</Link>
                                            <Link class="item" to="/Cardfutsal">Lapangan Futsal</Link>
                                            <Link class="item" to="/Cardbad">Lapangan Badminton</Link>
                                </div>
                        </div>
                    <br/>
                    <br/>
                    
                    <div class="row">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                    </div>

		                
                    </div>
            </div>

      </div> 
  </div>)
  }
}

export default Cardgymnas;
