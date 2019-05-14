import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import Orderhis from './Orderhis';
import './orderhislist.css'
import { Link } from 'react-router-dom'

const Orderhislist = ({orders}) => {
  return (
    <div className="container">
      <br/>
       <br/>
       <div class="container" className="his white">
       <h1 class="histitle">Order History</h1>
       <br/>
       <br/>
       <div class="containergr"></div>
    <div className="order-list section">
      { orders && orders.map(order => {
        return (
          <Link to={'/order/' + order.id} key={order.id}>
            <Orderhis orders={order} />
          </Link>
        )
      })}  
    </div>

    </div>
       </div>
  )
}

export default Orderhislist

// class Orderhislist extends Component {
//   render() {
//     const { auth} = this.props;
//     if (!auth.uid) return <Redirect to='/signin' /> 
//     return (
//       <div className="container">
//       <br/>
//        <br/>
//        <div class="container" className="his white">
//        <h1 class="histitle">Order History</h1>
//        <br/>
//        <br/>
//        <div class="containergr">
//        <Orderhis/>
//        <Orderhis/>
//        <Orderhis/>
//        <Orderhis/>

//        </div>
//        </div>
//       </div>
//     )
//   }
// }


// const mapStateToProps = (state) => {
//     // console.log(state);
//     return {
//       auth: state.firebase.auth
//     }
//   }
  
//   export default compose(
//     connect(mapStateToProps)
//   )(Orderhislist)

