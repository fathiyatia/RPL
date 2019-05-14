import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import './OrderDet.css'
import Bayar from './Bayar'
import Gabayar from './Gabayar'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

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
                                                <h5>: Gelora IPB</h5>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="dt">
                                                <h5>Tanggal</h5>
                                            </div>
                                            <div class="isidt">
                                                <h5>: 14 Mei</h5>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="dt">
                                                <h5>Jam</h5>
                                            </div>
                                            <div class="isidt">
                                                <h5>: 08.00</h5>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="dt">
                                                <h5>Harga</h5>
                                            </div>
                                            <div class="isidt">
                                                <h5>: 70000</h5>
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



const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    const id = ownProps.match.params.id;
    const orders = state.firestore.data.orders;
    const order = orders ? orders[id] : null
    return {
      order: order,
      auth: state.firebase.auth
    }
  }
  
  export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
      collection: 'orders'
    }])
  )(OrderDet)
