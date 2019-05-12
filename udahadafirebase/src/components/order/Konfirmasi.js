import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './DetailAsset.css'


class Konfirmasi extends Component {
  render() {
    const { auth} = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
              <br/>
              <br/>  
              <div class="container" className="akun white">

                <head>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous"></link>    
                </head>

	                

                    <h2 class="judulpes text-center">Rincian Pesanan</h2>
                    <br/>

                    <ul class="text-center list-group list-group-flush">
                      <li class="list-group-item"><h5><i class="fas fa-map-marker-alt"></i> &nbsp; Gelora IPB &nbsp;</h5></li>
                      <li class="list-group-item"><h5><i class="fas fa-calendar-alt"></i>&nbsp; 17 Mei 2019 &nbsp;</h5></li>
                      <li class="list-group-item"><h5><i class="fas fa-clock"></i>&nbsp; 16.00 &nbsp;</h5></li>
                      <li class="list-group-item"><h5><i class="fas fa-tag"></i>&nbsp; Rp 70.000 &nbsp;</h5></li>
                    </ul>

                    <br/>
                    <div class="pesan center">
                      <Link to="/orderdet"> <Button color="info" onClick={()=>{ alert('Terimakasih, pesanan diterima. Silahkan melakukan pembayaran.'); }}>Pesan</Button></Link>
                    </div>



          
            </div>

      </div>

    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps)
)(Konfirmasi)
