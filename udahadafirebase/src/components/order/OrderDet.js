import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import './OrderDet.css'
import Bayar from './Bayar'
import Gabayar from './Gabayar'

class OrderDet extends Component {
  render() {
    return (
      <div className="container">
      <br/>
       <br/>
       <div class="container" className="det white">
       <div>                    
                        <h2> My Order</h2>
                        <hr/>
                        <br/>
                        <div class="daftardt"> 
                       
                                        <div class="row">
                                            <div class="dt">
                                                <h5>Nama</h5>
                                            </div>
                                            <div class="isidt">
                                                <h5>: Rifqi Fathiya Ana</h5>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="dt">
                                                <h5>Tempat</h5>
                                            </div>
                                            <div class="isidt">
                                                <h5>: Gymnasium IPB</h5>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="dt">
                                                <h5>Tanggal</h5>
                                            </div>
                                            <div class="isidt">
                                                <h5>: 1 Mei</h5>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="dt">
                                                <h5>Jam</h5>
                                            </div>
                                            <div class="isidt">
                                                <h5>: 15.00</h5>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="dt">
                                                <h5>Harga</h5>
                                            </div>
                                            <div class="isidt">
                                                <h5>: 100.000</h5>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="dt">
                                                <h5>Status Pesanan</h5>
                                            </div>
                                            <div class="isidt">
                                                <h5>: Belum dibayar</h5> 
                                            </div>
                                        </div>


                                        <br/>        
                                      
                                        <Gabayar/>

                                        </div>
                        

       </div>

      </div>
      </div>
    )
  }
}



export default OrderDet;
