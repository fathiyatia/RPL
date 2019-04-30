import React, { Component } from 'react';
import './Orderdet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

class Orderdet extends Component {
  render() {
    return (
      <div className="Login">
          <div class="login-block">
              <div class="kontainer">

                <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                
                </head>

	                <div class="editprof mw8 center w-100">
                                        <div>                    
                                        <h2>Order</h2>
                                        <hr/>
                                        <div class="daftardt"> 
                                        <div class="row">
                                            <div class="dt">
                                                <label>Nama</label>
                                            </div>
                                            <div class="isidt">
                                                <p>Rifqi Fathiya Ana</p>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="dt">
                                                <label>Tempat</label>
                                            </div>
                                            <div class="isidt">
                                                <p>Gymnasium IPB</p>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="dt">
                                                <label>Tanggal</label>
                                            </div>
                                            <div class="isidt">
                                                <p>1 Mei</p>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="dt">
                                                <label>Jam</label>
                                            </div>
                                            <div class="isidt">
                                                <p>15.00</p>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="dt">
                                                <label>Harga</label>
                                            </div>
                                            <div class="isidt">
                                                <p>100.000</p>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="dt">
                                                <label>Status Pesanan</label>
                                            </div>
                                            <div class="isidt">
                                                <p>Belum dibayar</p> 
                                            </div>
                                        </div>


                                        <br/>        
                                        <div class="row">
                                            <div class="">
                                            <button type="button" class="btn btn-info">Cetak bukti</button> <button type="button" class="btn btn-danger">Pindah tangan</button>
                                            </div>
                                            
                                        </div>


                                        <br/>

                                        <div class="row">
                                            <div class="">
                                                <label>Rekening Pembayaran : </label>
                                                <ul>
                                                <li>BNI 02345 432112</li>
                                                <li>BCA 782945 423982</li>
                                                <li>Mandiri 77638 372338</li>
                                                </ul>

                                            </div>
                                        </div>

                                        <br/>

                                        <div class="row">
                                            <div class="">
                                            <button type="button" class="btn btn-info">Upload bukti</button> <button type="button" class="btn btn-danger">Cancel Order</button>
                                            </div>
                                            
                                        </div>


                                       







                                        </div>
                                        </div>
                                       
	                
                    </div>
            </div>

      </div> 
  </div>)
  }
}

export default Orderdet;
