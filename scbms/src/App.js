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
		    <header className="sans-serif">
		
 	 		      <div className="cover bg-left bg-center-l">
    				  <div className="bg-black-80 pb5 pb6-m pb7-l">
                <nav className="dt w-100 mw8 center"> 
                    <div className="dtc w2 v-mid pa3"></div>
                    <div className="dtc v-mid tr pa3"></div>
					      </nav>

              <div className="judul mw8 center tl mt4 mt5-m mt6-l ph3">
                <div className="judulkiri tl">
                    <br/>
                    <br/>
                    <h1 className="jd fw2 mb0 lh-title">Sport Center Booking</h1>
                    <h1 className="jd fw mb0 lh-title">Management System</h1>
                    <h5 className="tag fw1 mt3 mb4">mens sana in corpore sano</h5>
                
                    <div className="dropdown">
                    <button className="dropbutton">Looking for &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <i className="fa fa-angle-double-down" aria-hidden="true"></i></button>
                              <div className="dropdown-content">
                                        <Link className="lap" to="/Cardgymnas">Gymnasium</Link>
                                        <Link className="lap" to="/Cardbasket">Lapangan Basket</Link>
                                        <Link className="lap" to="/Cardfutsal">Lapangan Futsal</Link>
                                        <Link className="lap" to="/Cardbad">Lapangan Badminton</Link>
                              </div>
                    </div>
                </div>


                <div className="judulkanan tr">
                    <img src={Homepage} alt="Welcome" className="landing"/>
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
