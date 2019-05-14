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
    
                        <div class="row">
                        <div class="">
                        <button type="button" class="tombol btn btn-info">Cetak bukti</button> <button type="button" class="tombol btn btn-danger">Pindah tangan</button>
                        </div>
                        </div>

      </div>
    )
  }
}



export default DetailAsset;
