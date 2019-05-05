import React, { Component } from 'react';
import logo from './logo.svg';
import './Success.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

class Success extends Component {
  render() {
    return (
      <div className="Login">
          <div class="login-block">
              <div class="kontainer">

                <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>

                </head>

	                <div class="editprof mw8 center w-100">

                     <div class="alert alert-success" role="alert">
                      <h4 class="alert-heading">Transaksi Berhasil!</h4>
                      <p>Terimakasih telah melakukan pembayaran.
                      <br/> Silahkan tunggu konfirmasi pesanan anda.</p>
                    </div>




              </div>
            </div>

      </div>
  </div>)
  }
}

export default Success;
