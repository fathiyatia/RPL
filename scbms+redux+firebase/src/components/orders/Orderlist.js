import React, { Component } from 'react';
import logo from '../../../src/logo.svg';
import './Orderlist.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

class Orderlist extends Component {
  render() {
    return (
      <div className="Login">
          <div class="login-block">
              <div class="kontainer">

                <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
                </head>

	                <div class="editprof mw8 center w-100">
                    <div class="tabelorder">
                    <h2>Order List</h2>
                    <br/>
                    
                    <Table>
                        <Thead>
                            <Tr>
                            <Th> Nama</Th>
                            <Th> Tanggal</Th>
                            <Th> Jam</Th>
                            <Th> Foto</Th>
                            <Th> Konfirmasi</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                            <Td>Fathiya</Td>
                            <Td>9 April</Td>
                            <Td>10.00</Td>
                            <Td>insert photo</Td>
                            <Td><button type="button" class="btn btn-primary"><i class="fas fa-check"></i></button> <button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button></Td>
                            </Tr>

                            <Tr>
                            <Td>Fathiya</Td>
                            <Td>9 April</Td>
                            <Td>10.00</Td>
                            <Td>insert photo</Td>
                            <Td><button type="button" class="btn btn-primary"><i class="fas fa-check"></i></button> <button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button></Td>
                            </Tr>

                            <Tr>
                            <Td>Rifqi</Td>
                            <Td>11 Mei</Td>
                            <Td>15.00</Td>
                            <Td>insert photo</Td>
                            <Td><button type="button" class="btn btn-primary"><i class="fas fa-check"></i></button> <button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button></Td>
                            </Tr>

                            <Tr>
                            <Td>Ana</Td>
                            <Td>12 Juni</Td>
                            <Td>19.00</Td>
                            <Td>insert photo</Td>
                            <Td><button type="button" class="btn btn-primary"><i class="fas fa-check"></i></button> <button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button></Td>
                            </Tr>

                            <Tr>
                            <Td>Fathiya</Td>
                            <Td>9 April</Td>
                            <Td>10.00</Td>
                            <Td>insert photo</Td>
                            <Td><button type="button" class="btn btn-primary"><i class="fas fa-check"></i></button> <button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button></Td>
                            </Tr>

                            <Tr>
                            <Td>Fathiya</Td>
                            <Td>9 April</Td>
                            <Td>10.00</Td>
                            <Td>insert photo</Td>
                            <Td><button type="button" class="btn btn-primary"><i class="fas fa-check"></i></button> <button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button></Td>
                            </Tr>
                            
                        </Tbody>
                    </Table>
                        
                    </div>


        
		                
                    </div>
            </div>

      </div> 
  </div>)
  }
}

export default Orderlist;
