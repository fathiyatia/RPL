import React, { Component } from 'react';
import './Konfirmasi.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Popup from "reactjs-popup";
 
export default () => (
  <Popup trigger={<button> Trigger</button>} position="center">
    <div><h5>Insert isi konfirmasi order here</h5></div>
  </Popup>
);
