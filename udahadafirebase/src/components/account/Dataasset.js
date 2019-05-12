import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import Gymnas from './gymnas.jpg';


const Dataasset = (props) => {
    return (
        
        <div>                                  

            <div class="profimg">
                <img src={Gymnas} alt="Profile"/>
                
            </div>    


            <div class="deskripsi">    
                <div class="row">
                    <div class="data">
                        <h5>Nama</h5>
                    </div>
                    <div class="isidata">
                        <h5>: Gymnasium IPB</h5>
                    </div>
                </div>

                <div class="row">
                    <div class="data">
                        <h5>Alamat</h5>
                    </div>
                    <div class="isidata">
                        <h5>: Jl. Raya Dramaga xxxx, Bogor</h5>
                    </div>
                </div>

                <div class="row">
                    <div class="data">
                        <h5>Phone</h5>
                    </div>
                    <div class="isidata">
                        <h5>: 08577782355</h5>
                    </div>
                </div>

                <div class="row">
                    <div class="data">
                        <h5>No. Rekening 1</h5>
                    </div>
                    <div class="isidata">
                        <h5>: 563723 32323237 (BNI) </h5>
                    </div>
                </div>

                <div class="row">
                    <div class="data">
                        <h5>No. Rekening 2</h5>
                    </div>
                    <div class="isidata">
                        <h5>: 78723 32323 9037 (Mandiri) </h5>
                    </div>
                </div>

                <div class="row">
                    <div class="data">
                        <h5>No. Rekening 3</h5>
                    </div>
                    <div class="isidata">
                        <h5>: -</h5>
                    </div>
                </div>

                <div class="row">
                    <div class="data">
                        <h5>Harga Sewa</h5>
                    </div>
                    <div class="isidata">
                        <h5>: Rp150.000</h5>
                    </div>
                </div>

                <div class="row">
                    <div class="data">
                        <h5>Pilihan Jam</h5>
                    </div>
                    <div class="isidata">
                        <h5>: 08.00; 10.00; 12.00; 15.00; 18.00; 21.00; 23.00;</h5>
                    </div>
                </div>

                <div class="row">
                    <div class="data">
                        <br/>
                        <button type="button" class="btn btn-danger">Delete Asset</button>               
                    </div>
                </div>


                </div>
</div>
           
   
    )
  }


  const mapStateToProps = (state) => {
    // console.log(state);
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile,
    
    }
  }
  
  export default connect(mapStateToProps)(Dataasset)

