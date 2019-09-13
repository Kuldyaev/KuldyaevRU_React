import React, { Component } from 'react'
import './main.css'
import { Slide } from 'react-slideshow-image';
import {Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import MyUdacity from './udacity'
import Text1 from './slider'
const slideImages = [
  './img/slider/image2.jpg',
  './img/slider/image3.jpg',
  './img/slider/image4.jpg',
  './img/slider/image5.jpg',
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}


class Main extends Component{
    constructor(props){
		super(props);
		this.state={
			 scale: 0.7 ,
        }
    } 
    
    componentDidMount(){
        if (this.props.status.width){
            this.setState({
                scale: 1,
            })
        }
    }
    
    render(){
         
    const heightSlider = Math.round(this.props.status.width*0.66683071*this.props.status.scale)
    const widthSlider = Math.round(this.props.status.width*this.props.status.scale)
    
    
    if (this.props.status.scale<1){
        return(
            <div className='main' >
                <div className='main1blok' style={{'display': 'flex'}}>
                    <Text1  style={{'width': '30%', 'height': (heightSlider + 20)}}/>
                    <div className='mainslider' style={{'width': widthSlider, 'height': (heightSlider + 20)}}>
                        <Slide {...properties} className="slider-container" style={{'width': widthSlider, 'height': heightSlider}}>
                          <div className="each-slide" style={{'width': widthSlider, 'height': heightSlider}}>
                            <div style={{'backgroundImage': `url(${slideImages[0]})`, 'height': heightSlider}}>
                            </div>
                          </div>
                          <div className="each-slide" style={{'width': widthSlider}}>
                            <div style={{'backgroundImage': `url(${slideImages[1]})`, 'height': heightSlider}}>
                            </div>
                          </div>
                          <div className="each-slide" style={{'width': widthSlider}}>
                            <div style={{'backgroundImage': `url(${slideImages[2]})`, 'height': heightSlider}}>
                            </div>
                          </div>
                          <div className="each-slide" style={{'width': widthSlider}}>
                            <div style={{'backgroundImage': `url(${slideImages[3]})`, 'height': heightSlider}}>
                            </div>
                          </div>
                        </Slide>
                    </div>
                </div>
                <MyUdacity/>
            </div>
        )
    }
    else{
            
    return(
        <div className='main'>
            <div className='mainslider' style={{'width': widthSlider, 'height': (heightSlider + 20)}}>
                <Slide {...properties} className="slider-container" style={{'width': widthSlider, 'height': heightSlider}}>
                  <div className="each-slide" style={{'width': widthSlider, 'height': heightSlider}}>
                    <div style={{'backgroundImage': `url(${slideImages[0]})`, 'height': heightSlider}}>
                    </div>
                  </div>
                  <div className="each-slide" style={{'width': widthSlider}}>
                    <div style={{'backgroundImage': `url(${slideImages[1]})`, 'height': heightSlider}}>
                    </div>
                  </div>
                  <div className="each-slide" style={{'width': widthSlider}}>
                    <div style={{'backgroundImage': `url(${slideImages[2]})`, 'height': heightSlider}}>
                    </div>
                  </div>
                  <div className="each-slide" style={{'width': widthSlider}}>
                    <div style={{'backgroundImage': `url(${slideImages[3]})`, 'height': heightSlider}}>
                    </div>
                  </div>
                </Slide>
            </div>
            <Text1/>
            <MyUdacity/>
        </div>
        )
    }
}}


export default withRouter(connect(state=>({status: state.status}))(Main))