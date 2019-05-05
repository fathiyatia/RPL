import React, { Component } from 'react';
import logo from './logo.svg';
import './Rincian.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

class Rincian extends Component {
  render() {
    return (
      <div className="Login">
          <div class="login-block">
              <div class="kontainer">

                <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>

                </head>

	                <div class="editprof mw8 center w-100">

                    <h2 class="text-center">Rincian Pesanan</h2>
                    <br/>
                
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item"><i class="fas fa-map-marker-alt"></i>&nbsp; Gelora IPB &nbsp;</li>
                      <li class="list-group-item"><i class="fas fa-calendar-alt"></i>&nbsp; 17 Mei 2019 &nbsp;</li>
                      <li class="list-group-item"><i class="fas fa-clock"></i>&nbsp; 16.00 &nbsp;</li>
                      <li class="list-group-item"><i class="fas fa-tag"></i>&nbsp; Rp 70.000 &nbsp;</li>
                    </ul>
                  
                    <br/>
                    <div class="pesan">
                      <a href="#" class="btn btn-info" role="button">Pesan</a>
                    </div>




              </div>
            </div>

      </div>
  </div>)
  }
}

export default Rincian;

