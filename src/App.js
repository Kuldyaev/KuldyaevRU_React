import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

import './App.css';
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import MyUdacity from './components/udacity'

import {changeMeasuring} from './actions/status'

class  App  extends Component {
    constructor(props){
		super(props);
		this.state={
			loading : 'true',
         };
    }     
    
    componentDidMount() {
        var width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        var height = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
            
        this.props.changeMeasuring(height, width)
    }
    
    render(){   
          return (
            <div className="App">
              <Header/>
              <Main/>
              <MyUdacity/>
              <Footer/>
            </div>
          );
    }
}

function mapStateToProps (store){
    return{
      store: store,
      status: store.status
    };
}

	
export default withRouter(connect(mapStateToProps, {changeMeasuring})(App));