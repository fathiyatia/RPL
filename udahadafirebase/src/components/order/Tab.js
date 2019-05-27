import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import './DetailAsset.css'
import { Redirect } from 'react-router-dom'
import { createOrder } from '../../store/actions/orderAction'
import { connect } from 'react-redux'


function Tanggal1() {
  var tempDate = new Date();
  var date = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
  const currDate1 = date;
  return (
    <h5 id="orderDate" value={currDate1}>{currDate1}</h5>
  );
}

function Tanggal2() {
var tempDate = new Date();
var date = (tempDate.getDate()+1) + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
const currDate2 = date;
return (
  <h5 id="orderDate" value={currDate2} >{currDate2}</h5>
);
}

function Tanggal3() {
  var tempDate = new Date();
  var date = (tempDate.getDate()+2) + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
  const currDate3 = date;
  return (
      <h5 id="orderDate" value={currDate3}>{currDate3}</h5>
  );
  }

function Tanggal4() {
  var tempDate = new Date();
  var date = (tempDate.getDate()+3) + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
  const currDate4 = date;
  return (
      <h5 id="orderDate" value={currDate4}>{currDate4}</h5>
  );
  }

const Clockbtn = (props) =>{
    return (
        <div class="grid-item">
          <Link class="menu" to="/konfirmasi">
            <a class="clkbtn waves-effect waves-light btn-large #ab47bc purple lighten-1" id="orderTime" value="08.00" onClick={this.handleChange}>08.00</a>
          </Link>
        </div>    
    );
}


class Example extends React.Component {
  
  // constructor(props) {
  //   super(props);
  //   this.toggle = this.toggle.bind(this);
    state = {
      activeTab: '1',
      orderTime:'',
      orderDate:''
    }
  // }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);q
    this.props.createProject(this.state);
    this.props.history.push('/');
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div>
        <Nav tabs>
          <NavItem>
            
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              <Tanggal1 onClick={this.handleChange}/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              <Tanggal2 onClick={this.handleChange}/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              <Tanggal3 onClick={this.handleChange}/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              <Tanggal4 onClick={this.handleChange}/>
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


          <TabPane tabId="3">
          <Row>
              <Col sm="12">
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




          <TabPane tabId="4">
          <Row>
              <Col sm="12">
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
        </TabContent>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createOrder: (order) => dispatch(createOrder(order))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Example)
