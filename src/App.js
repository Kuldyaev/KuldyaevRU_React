import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

import './App.css';
import Header from './components/header'
import Main from './components/main'
import NotFound from './components/notfound'
import Footer from './components/footer'
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
        
        var scale = 0.7
        if(width < 1024){scale = 1}
        
        this.props.changeMeasuring(width, height, scale)
    }
    
    render(){   
          return (
            <div className="App">
              <Header/>
              <Switch>
                        <Route exact path='/' component = {Main}/>

                        <Route component={NotFound} />
              </Switch>
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