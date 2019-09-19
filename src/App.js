import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

import './App.css';
import Header from './components/header'
import Main from './components/main'
import NotFound from './components/notfound'
import Footer from './components/footer'
import Udacity1 from './components/udacity1'
import UdacityCourse1 from './components/udaCourse1'
import UdacityCourse2 from './components/udaCourse2'
import UdacityCourse3 from './components/udaCourse3'
import UdacityCourse4 from './components/udaCourse4'
import PhotoGallery from './components/photogallery'
import PhotoMap from './components/photomap'

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
                        <Route exact path='/udacity' component = {Udacity1}/>
                        <Route exact path='/udacity/courses/1' component = {UdacityCourse1}/>
                        <Route exact path='/udacity/courses/2' component = {UdacityCourse2}/>
                        <Route exact path='/udacity/courses/3' component = {UdacityCourse3}/>
                        <Route exact path='/udacity/courses/4' component = {UdacityCourse4}/>
                        <Route exact path='/udacity/photos/gallery' component = {PhotoGallery}/>
                        <Route exact path='/udacity/photos/map' component = {PhotoMap}/>
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