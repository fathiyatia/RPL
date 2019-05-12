import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import './DetailAsset.css'

function Tanggal1() {
  var tempDate = new Date();
  var date = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
  const currDate = date;
  return (
    <h5>{currDate}</h5>
  );
}

function Tanggal2() {
var tempDate = new Date();
var date = (tempDate.getDate()+1) + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
const currDate = date;
return (
  <h5>{currDate}</h5>
);
}

function Tanggal3() {
  var tempDate = new Date();
  var date = (tempDate.getDate()+2) + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
  const currDate = date;
  return (
      <h5>{currDate}</h5>
  );
  }

function Tanggal4() {
  var tempDate = new Date();
  var date = (tempDate.getDate()+3) + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
  const currDate = date;
  return (
      <h5>{currDate}</h5>
  );
  }

const Clockbtn = (props) =>{
    return (
        <div class="grid-item"><Link class="menu" to="/konfirmasi"><a class="clkbtn waves-effect waves-light btn-large #ab47bc purple lighten-1">08.00</a></Link></div>    
    );
}


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              <Tanggal1/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              <Tanggal2/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              <Tanggal3/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              <Tanggal4/>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <br/>
                <div class="grid-container">
                <Clockbtn/>
                <Clockbtn/>
                <Clockbtn/>
                <Clockbtn/>
                <Clockbtn/>
                <Clockbtn/>
                <Clockbtn/>
                <Clockbtn/>
                <Clockbtn/>
                <Clockbtn/>
                <Clockbtn/>
                <Clockbtn/>
                </div>
              </Col>
            </Row>
          </TabPane>


          <TabPane tabId="2">
            <Row>
              <Col sm="12">
              <div class="grid-container">
                <Clockbtn/>
                <Clockbtn/>
                <Clockbtn/>
                <Clockbtn/>
                </div>
              </Col>
            </Row>
          </TabPane>


          <TabPane tabId="3">
          <Row>
              <Col sm="12">
              <div class="grid-container">
                <Clockbtn/>
                <Clockbtn/>
                <Clockbtn/>
                <Clockbtn/>
                </div>
              
              </Col>
            </Row>
          </TabPane> 




          <TabPane tabId="4">
          <Row>
              <Col sm="12">
              <div class="grid-container">
                <Clockbtn/>
                <Clockbtn/>
                <Clockbtn/>
                <Clockbtn/>
                </div>
              </Col>
            </Row>
          </TabPane>    
        </TabContent>
      </div>
    );
  }
}