import React, { Component } from 'react';
import logo from './logo.svg';
import './Editasset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

class Editasset extends Component {
  render() {
    return (
      <div className="Login">
          <div class="login-block">
              <div class="kontainer">

                <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                
                </head>

	                <div class="editprof mw8 center w-100">

                    <h2>Edit My Asset</h2>
            
              
                  <form class="form" action="##" method="post">
                      <div class="">
                          
                          <div class="edit">
                              <label for="first_name"><h4>Nama</h4></label>
                              <input type="text" class="form-control" name="first_name" id="first_name" placeholder="nama sport center anda"/>
                          </div>
                      </div>


                      <div class="edit">
                          
                          <div class="">
                              <label for="email"><h4>Alamat</h4></label>
                              <input type="text" class="form-control" name="alamat" id="alamat" placeholder="lokasi sport center anda"/>
                          </div>
                      </div>

                      <div class="edit">
                          
                          <div class="">
                              <label for="rek1"><h4>Kategori</h4></label> <br/>
                              &emsp; <input type="radio" name="kategori" value="Gymnasium"/> Gymnasium <br/>
                              &emsp; <input type="radio" name="kategori" value="Basket"/> Lapangan Basket <br/> 
                              &emsp; <input type="radio" name="kategori" value="Futsal"/> Lapangan Futsal <br/>
                              &emsp; <input type="radio" name="kategori" value="Badminton"/> Lapangan Badminton
                          </div>
                      </div>


                      <div class="edit">
                          
                          <div class="">
                              <label for="phone"><h4>Phone</h4></label>
                              <input type="text" class="form-control" name="phone" id="phone" placeholder="nomor sport center anda yang dapat dihubungi"/>
                          </div>
                      </div>


                     
                      <div class="edit">
                          
                          <div class="">
                              <label for="rek1"><h4>No. Rekening 1</h4></label>
                              <input type="text" class="form-control" name="rek1d" id="rek1d" placeholder="tulis dengan format : no rekening (nama bank)"/>
                              <label for="rek1"><h5>Nama Bank :</h5></label> 
                              &emsp; <input type="radio" name="kategori" value="Gymnasium"/> BNI
                              &emsp; <input type="radio" name="kategori" value="Basket"/> BCA
                              &emsp; <input type="radio" name="kategori" value="Futsal"/> Mandiri 
                              
                          </div>
                      </div>

                      <div class="edit">
                          
                          <div class="">
                              <label for="rek1"><h4>No. Rekening 2</h4></label>
                              <input type="text" class="form-control" name="rek1d" id="rek1d" placeholder="nomor rekening lainnya, jika tidak ada silahkan tulis '-' "/>
                              <label for="rek1"><h5>Nama Bank :</h5></label> 
                              &emsp; <input type="radio" name="kategori" value="Gymnasium"/> BNI
                              &emsp; <input type="radio" name="kategori" value="Basket"/> BCA
                              &emsp; <input type="radio" name="kategori" value="Futsal"/> Mandiri 
                          </div>
                      </div>

                      <div class="edit">
                          
                          <div class="">
                              <label for="rek1"><h4>No. Rekening 3</h4></label>
                              <input type="text" class="form-control" name="rek1d" id="rek1d" placeholder="nomor rekening lainnya, jika tidak ada silahkan tulis '-' "/>
                              <label for="rek1"><h5>Nama Bank :</h5></label> 
                              &emsp; <input type="radio" name="kategori" value="Gymnasium"/> BNI
                              &emsp; <input type="radio" name="kategori" value="Basket"/> BCA
                              &emsp; <input type="radio" name="kategori" value="Futsal"/> Mandiri 
                          </div>
                      </div>

                      <div class="edit">
                          
                          <div class="">
                              <label for="rek1"><h4>Harga Sewa</h4></label>
                              <input type="text" class="form-control" name="rek1d" id="rek1d" placeholder="ex : 75.000"/>
                          </div>
                      </div>

                      <div class="edit">
                          
                          <div class="">
                              <label for="rek1"><h4>Pilihan Jam Sewa</h4></label><br/>
                              <input type="checkbox" value="08.00"/> 08.00 &emsp;
                              <input type="checkbox" value="09.00"/> 09.00 &emsp;
                              <input type="checkbox" value="10.00"/> 10.00 &emsp;
                              <input type="checkbox" value="11.00"/> 11.00 &emsp;
                              <input type="checkbox" value="13.00"/> 13.00 &emsp;
                              <input type="checkbox" value="14.00"/> 14.00 &emsp;

                              <br/>
                              <input type="checkbox" value="15.00"/> 15.00 &emsp;
                              <input type="checkbox" value="16.00"/> 16.00 &emsp;
                              <input type="checkbox" value="17.00"/> 17.00 &emsp;
                              <input type="checkbox" value="19.00"/> 19.00 &emsp;
                              <input type="checkbox" value="20.00"/> 20.00 &emsp;
                              <input type="checkbox" value="21.00"/> 21.00 &emsp;

                          </div>
                      </div>





                      

                      <div class="edit">
                           <div class="">
                                <br/>
                              	<button class="btn btn-lg btn-success" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> Save</button>
                               	<button class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"></i> Reset</button>
                            </div>
                      </div>
              	</form>
		                
              </div>
            </div>

      </div> 
  </div>)
  }
}

export default Editasset;
