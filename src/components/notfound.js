import React, { Component } from 'react'
import {Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import './main.css'

class NotFound extends Component{
  render(){
    return (
            <div className='mainmessage'>
                <h3> Error404. Такая страница не существует.</h3>
             </div>
    )
  }  
}
export default withRouter(connect(state=>({status: state.status}))(NotFound))
