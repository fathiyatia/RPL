import React, { Component } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Homepage from './homepage.png';
import Dropdown from './Dropdown';



class Home extends Component {
  render() {
    return (
    <div className="App">
		    <header className="sans-serif">
		
 	 		      <div className="cover bg-left bg-center-l">
    				  <div className="bg-black-80 pb5 pb6-m pb7-l">
            

              <div className="judul mw8 center tl mt4 mt5-m mt6-l ph3">
              <br/>
                <div className="judulkiri tl">
                    <br/>
                    <br/>
                    <h1 className="jd fw2 mb0 lh-title">Sport Center Booking</h1>
                    <h1 className="jd fw mb0 lh-title">Management System</h1>
                    <h5 className="tag fw1 mt3 mb4">mens sana in corpore sano</h5>
                
                    {/* <div className="dropdown">
                    <button className="dropbutton">Looking for &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <i className="fa fa-angle-double-down" aria-hidden="true"></i></button>
                              <div className="dropdown-content">
                                        <Link className="lap" to="/Cardgymnas">Gymnasium</Link>
                                        <Link className="lap" to="/Cardbasket">Lapangan Basket</Link>
                                        <Link className="lap" to="/Cardfutsal">Lapangan Futsal</Link>
                                        <Link className="lap" to="/Cardbad">Lapangan Badminton</Link>
                              </div>
                    </div> */}

                    
                    {/* <a className='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>

                    
                    <ul id='dropdown1' className='dropdown-content'>
                        <li><a href="#!">one</a></li>
                        <li><a href="#!">two</a></li>
                        <li className="divider" tabindex="-1"></li>
                        <li><a href="#!">three</a></li>
                        <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
                        <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
                    </ul> */}

                    <Dropdown/>
        
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

export default Home;
