import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import Tab from './Tab';
import './DetailAsset.css';
import './AssetInfo.css';
import Gymnas from './gymnas.jpg';


class AssetInfo extends Component {
  render() {
    return (
      <div className="container">

                        <h3>Gymnasium IPB</h3>

                        <br/>  
                        <div class="">

                        <div class="buatgambar">
                            <img src={Gymnas} alt="Profile"/>
                        </div>    


                        <div class="buatdeskripsi">    
                        <div class="row">
                            <div class="des1">
                                <h5><b> Alamat</b></h5>
                            </div>
                            <div class="des2">
                                <h5>: Jl. Dramaga XXX</h5>
                            </div>
                        </div>

                        <div class="row">
                            <div class="des1">
                                <h5><b> Contact Person </b></h5>
                            </div>
                            <div class="des2">
                                <h5>: 085776554583888</h5>
                            </div>
                        </div>

                        <div class="row">
                            <div class="des1">
                                <h5><b> Harga</b></h5>
                            </div>
                            <div class="des2">
                                <h5>: Rp100.000</h5>
                            </div>
                        </div>

                        </div>


                        </div>
                                    
                            </div>
    )
  }
}

export default AssetInfo;
