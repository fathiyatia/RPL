import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import Tab from './Tab';
import AssetInfo from './AssetInfo';
import './OrderDet.css';

class DetailAsset extends Component {
  render() {
    return (
      <div className="">
        <br/>
        <div class="row">
            <div class="rekening">
                <h5>Rekening Pembayaran : </h5>
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
            <button type="button" class="tombol btn btn-info">Upload bukti</button> <button type="button" class="tombol btn btn-danger">Cancel Order</button>
            </div>
            
        </div>

      </div>
    )
  }
}



export default DetailAsset;
