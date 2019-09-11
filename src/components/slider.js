import React, { Component } from 'react'
import { Slide } from 'react-slideshow-image';
import {Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import './main.css'

const slideImages = [
  './img/slider/image2.jpg',
  './img/slider/image3.jpg',
  './img/slider/image4.jpg'
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

class Slider extends Component{
    render(){
    const heightSlider = Math.round(this.props.status.width*0.75*0.9)
    const widthSlider = Math.round(this.props.status.width*0.9)
   
    return (
      <div className="slider" style={{'width': widthSlider, 'height': heightSlider}}>
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
        </Slide>
        <p>Ширина экрана{String(this.props.status.width)} ширина слайдера {widthSlider} </p>
        <p>Высота экрана{String(this.props.status.height)} высота слайдера {heightSlider} </p>
      </div>
    )
    }  
}



export default withRouter(connect(state=>({status: state.status}))(Slider))