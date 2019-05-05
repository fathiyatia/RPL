import React, { Component } from 'react';
import logo from './logo.svg';
import './Template.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

class Cetak extends Component {
  render() {
    return (
      <div className="Login">
          <div class="login-block">
              <div class="kontainer">

                <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>

                </head>

	                <div class="editprof mw8 center w-100">
                    <div class="alert alert-primary" role="alert">
                        <a href="#" class="alert-link">Ubah nama pemesan</a>
                    </div>
                    <div class="cetak">
                      <a href="#" class="btn btn-info" role="button">Cetak Bukti</a>
                    </div>


              </div>
            </div>

      </div>
  </div>)
  }
}

export default Cetak;
