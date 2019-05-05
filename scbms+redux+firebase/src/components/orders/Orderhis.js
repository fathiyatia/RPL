import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Orderhis.css';
import {Link} from 'react-router-dom';
import Gymnas from '../photo/gymnas.jpg';
import Prof from '../photo/homepage1.jpg';


class Tampilansewa extends Component {
  render() {
    return (
      <div className="Login">
          <div class="login-block">
              <div class="kontainer">

                <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
                <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                </head>

	                <div class="editprof mw8 center w-100">

                    <h3>Order History</h3>
              

                    <div class="mob">
                    <div class="row">

                            <div class="history_wrap">
                                    <div class="history_list">

                                        <div class="history_item_name">
                                          <div class="itemkiri">
                                          <span class="item">Lokasi :</span>
                                            <span class="item">Harga :</span>
                                              <span class="item">Status :</span>
                                          </div>

                                          <div class="itemkanan">
                                          <span class="item">Gymnasium IPB</span>
                                            <span class="item">Rp100.000</span>
                                              <span class="item">Sudah dibayar</span>
                                          </div>
                                        </div>
                                        
                                        <div class="history_status">
                                            <span class="history_total"> <Link to="/orderdet"><button type="button" class="btn btn-primary btn-sm">See Details</button></Link></span>
                                        </div>
                                    </div>                                      
                            </div>

                            <div class="history_wrap">
                                    <div class="history_list">

                                        <div class="history_item_name">
                                          <div class="itemkiri">
                                          <span class="item">Lokasi :</span>
                                            <span class="item">Harga :</span>
                                              <span class="item">Status :</span>
                                          </div>

                                          <div class="itemkanan">
                                          <span class="item">Gymnasium IPB</span>
                                            <span class="item">Rp100.000</span>
                                              <span class="item">Sudah dibayar</span>
                                          </div>
                                        </div>
                                        
                                        <div class="history_status">
                                            <span class="history_total"> <Link to="/orderdet"><button type="button" class="btn btn-primary btn-sm">See Details</button></Link></span>
                                        </div>
                                    </div>                                      
                            </div>

                            <div class="history_wrap">
                                    <div class="history_list">

                                        <div class="history_item_name">
                                          <div class="itemkiri">
                                          <span class="item">Lokasi :</span>
                                            <span class="item">Harga :</span>
                                              <span class="item">Status :</span>
                                          </div>

                                          <div class="itemkanan">
                                          <span class="item">Gymnasium IPB</span>
                                            <span class="item">Rp100.000</span>
                                              <span class="item">Sudah dibayar</span>
                                          </div>
                                        </div>
                                        
                                        <div class="history_status">
                                            <span class="history_total"> <Link to="/orderdet"><button type="button" class="btn btn-primary btn-sm">See Details</button></Link></span>
                                        </div>
                                    </div>                                      
                            </div>



             




                          
                    </div>
    </div>
</div>
                    
		                
              </div>
            </div>

      </div> 
)
  }
}

export default Tampilansewa;

