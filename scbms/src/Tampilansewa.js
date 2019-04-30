import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tampilansewa.css';
import {Link} from 'react-router-dom';
import Gymnas from './gymnas.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import './material.min.css';
import './material.css';
import './material.min.css.map';


class Tampilansewa extends Component {
  render() {
    return (
      <div className="Login">
          <div class="login-block">
              <div class="kontainer">

                <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="./material.min.css"/>
                <script src="./material.min.js"></script>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
                </head>

	                <div class="editprof mw8 center w-100">

                    <h3>Gymnasium IPB</h3>

                    <br/>  
                    <div class="">

                      <div class="buatgambar">
                          <img src={Gymnas} alt="Profile"/>
                      </div>    


                      <div class="buatdeskripsi">    
                      <div class="row">
                          <div class="des1">
                              <label> Alamat</label>
                          </div>
                          <div class="des2">
                              <p>Jl. Dramaga XXX</p>
                          </div>
                      </div>

                      <div class="row">
                          <div class="des1">
                              <label> Contact Person</label>
                          </div>
                          <div class="des2">
                              <p>085776554583888</p>
                          </div>
                      </div>

                      <div class="row">
                          <div class="des1">
                              <label> Harga</label>
                          </div>
                          <div class="des2">
                              <p>Rp100.000</p>
                          </div>
                      </div>
                      </div>
                      </div>


                    <div class="menusewa">
                    <Tabs>
                    <TabList class="tabtab">
                        <Tab>1 Mei</Tab>
                        <Tab>2 Mei</Tab>
                        <Tab>3 Mei</Tab>
                        <Tab>4 Mei</Tab>
                        <Tab>5 Mei</Tab>
                    </TabList>
                
                    <TabPanel>
                        <div class="grid-container">
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--cyan">08.00</button></div>
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--cyan">10.00</button></div>
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--cyan">13.00</button></div>  
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--cyan">15.00</button></div>
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--cyan">17.00</button></div>
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--cyan">20.00</button></div>  
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--cyan">21.00</button></div>
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--cyan">22.00</button></div>
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--cyan">23.00</button></div>
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--cyan">00.00</button></div>
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--cyan">02.00</button></div>  
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--cyan">04.00</button></div> 
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--cyan">05.00</button></div> 
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--cyan">06.00</button></div> 
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--cyan">07.00</button></div> 
                        </div>


                    </TabPanel>
                    <TabPanel>
                    <div class="grid-container">
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent ">08.00</button></div>
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent ">10.00</button></div>
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent ">13.00</button></div>  
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent ">15.00</button></div>
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent ">17.00</button></div>
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent ">20.00</button></div>  
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent ">21.00</button></div>
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent ">22.00</button></div>
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent ">23.00</button></div>
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent ">00.00</button></div>
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent ">02.00</button></div>  
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent ">04.00</button></div> 
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent ">05.00</button></div> 
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent ">06.00</button></div> 
                        <div class="grid-item"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent ">07.00</button></div> 
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 4</h2>
                    </TabPanel>
                    <TabPanel>
                    <h2>Any content 4</h2>

                    </TabPanel>
                    </Tabs>     
                    </div>
            
		                
              </div>
            </div>

      </div> 
  </div>)
  }
}

export default Tampilansewa;

