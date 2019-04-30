//INI TEMPLATE SIGN IN
import React, { Component } from 'react';
import logo from './logo.svg';
import './Account.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Profimg from './profimg.jpg';
import Gymnas from './gymnas.jpg';

class Account extends Component {
  render() {
    return (
      <div className="Myaccount">
      <div class="Account">
        <head>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        </head>
        
        <div class="container emp-profile">
            <form method="post">
                <div class="atas row">
                    <div class="col-md-9">
                        <div class="profile-head">
                            <div class="grid-conta">
                            <div class="grid-it"> 
                                    <h4>My Profile</h4>
                                    <br/>
                            </div>

                            <div class="grid-it">
                                    <div class="editbtn">
                                    <Link to="/editprofile"><input type="submit" class="profile-edit-btn" name="btnAddMore" value="Order History"/></Link>
                                    </div>
                            </div>
                            
                            <div class="grid-it">
                                    <div class="editbtn">
                                    <Link to="/editprofile"><input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/></Link>
                                    </div>
                            </div>    
                            
                            </div>


                                    <ul class="nav nav-tabs"></ul>
                        </div>
                    </div>

                </div>
              

                <div class="profileisi row">

                    <div class="apakek">
                        <div class="">
                            <div class="">

                                        <div class="profimg">
                                            <img src={Profimg} alt="Profile"/>
                                            <div class="file-upload">
                                                <label for="upload" class="file-upload__label">Change Photo</label>
                                                <input id="upload" class="file-upload__input" type="file" name="file-upload"/>
                                            </div>
                                        </div>    
                                        

                                      

                                        <div class="deskripsi">    
                                        <div class="row">
                                            <div class="data">
                                                <label>Nama</label>
                                            </div>
                                            <div class="isidata">
                                                <p>Rifqi Fathiya Ana</p>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="data">
                                                <label>Email</label>
                                            </div>
                                            <div class="isidata">
                                                <p>Sport-center-booking@gmail.com</p>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="data">
                                                <label>Phone</label>
                                            </div>
                                            <div class="isidata">
                                                <p>085776554583</p>
                                            </div>
                                        </div>
                                        </div>
                            </div>



                        </div>
                    </div>
                </div>
                <div class="atas row">
                    <div class="col-md-9">
                        <div class="profile-head">
                                            <div class="grid-conta">
                                            <div class="grid-it"> 
                                                    <h4>My Asset</h4>
                                                    <br/>
                                            </div>

                                            <div class="grid-it">
                                                    <div class="editbtn">
                                                    <Link to="/orderlist"><input type="submit" class="profile-edit-btn" name="btnAddMore" value="Order List"/></Link>
                                                    </div>
                                            </div>
                                            
                                            <div class="grid-it">
                                                    <div class="editbtn">
                                                    <Link to="/editasset"><input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Asset"/></Link>
                                                    </div>
                                            </div>    
                                            
                                            </div>
                                    <ul class="nav nav-tabs"></ul>
                        </div>
                    </div>

                </div>
              

                <div class="profileisi row">

                    <div class="apakek">
                        <div class="">
                            <div class="">

                                        <div class="assetimg">
                                            <img src={Gymnas} alt="Asset"/>
                                            <div class="file-upload">
                                                <label for="upload" class="file-upload__label">Change Photo</label>
                                                <input id="upload" class="file-upload__input" type="file" name="file-upload"/>
                                            </div>
                                        </div>    
                                        

                                      

                                        <div class="deskripsi">    
                                        <div class="row">
                                            <div class="data">
                                                <label>Nama</label>
                                            </div>
                                            <div class="isidata">
                                                <p>Gymnasium IPB</p>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="data">
                                                <label>Alamat</label>
                                            </div>
                                            <div class="isidata">
                                                <p>Jl. Raya Dramaga xxxx, Bogor</p>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="data">
                                                <label>Phone</label>
                                            </div>
                                            <div class="isidata">
                                                <p>08577782355</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="data">
                                                <label>No. Rekening 1</label>
                                            </div>
                                            <div class="isidata">
                                                <p>563723 32323237 (BNI) </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="data">
                                                <label>No. Rekening 2</label>
                                            </div>
                                            <div class="isidata">
                                                <p>78723 32323 9037 (Mandiri) </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="data">
                                                <label>No. Rekening 3</label>
                                            </div>
                                            <div class="isidata">
                                                <p>-</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="data">
                                                <label>Harga Sewa</label>
                                            </div>
                                            <div class="isidata">
                                                <p>Rp150.000</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="data">
                                                <label>Pilihan Jam</label>
                                            </div>
                                            <div class="isidata">
                                                <p>08.00; 10.00; 12.00; 15.00; 18.00; 21.00; 23.00;</p>
                                            </div>
                                        </div>

                                        </div>
                            </div>



                        </div>
                    </div>
                </div>
            </form>           
        </div>

    </div>
</div>)
  }
}

export default Account;
