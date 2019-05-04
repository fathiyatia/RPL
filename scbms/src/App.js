import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Homepage from './homepage.png';


class App extends Component {
  render() {
    return (
    <div className="App">
		    <header class="sans-serif">
		
 	 		      <div class="cover bg-left bg-center-l">
    				  <div class="bg-black-80 pb5 pb6-m pb7-l">
                <nav class="dt w-100 mw8 center"> 
                    <div class="dtc w2 v-mid pa3"></div>
                    <div class="dtc v-mid tr pa3"></div>
					      </nav>

              <div class="judul mw8 center tl mt4 mt5-m mt6-l ph3">
                <div class="judulkiri tl">
                    <br/>
                    <br/>
                    <h1 class="jd fw2 mb0 lh-title">Sport Center Booking</h1>
                    <h1 class="jd fw mb0 lh-title">Management System</h1>
                    <h5 class="tag fw1 mt3 mb4">mens sana in corpore sano</h5>
                
                    <div class="dropdown">
                    <button class="dropbutton">Looking for &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <i class="fa fa-angle-double-down" aria-hidden="true"></i></button>
                              <div class="dropdown-content">
                                        <Link class="lap" to="/Cardgymnas">Gymnasium</Link>
                                        <Link class="lap" to="/Cardbasket">Lapangan Basket</Link>
                                        <Link class="lap" to="/Cardfutsal">Lapangan Futsal</Link>
                                        <Link class="lap" to="/Cardbad">Lapangan Badminton</Link>
                              </div>
                    </div>
                </div>


                <div class="judulkanan tr">
                    <img src={Homepage} alt="Welcome" class="landing"/>
                </div>

              </div>
            </div>
          </div> 
        </header>
      </div>
    );
  }
}

export default App;
