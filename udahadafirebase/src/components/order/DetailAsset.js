import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import Tab from './Tab';
import AssetInfo from './AssetInfo';
import './DetailAsset.css';
class DetailAsset extends Component {
  render() {
    return (
      <div className="container">
      <br/>
       <br/>
       <div class="container" className="tabtab white">
       <br/>
       <AssetInfo/>
       <br/>
       <br/>
       <br/>
       <br/>
       <Tab />

       </div>

      </div>
    )
  }
}



export default DetailAsset;
