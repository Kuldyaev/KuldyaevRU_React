import React, { Component } from 'react';
import './main.css';
import { Slide } from 'react-slideshow-image';
import {Link, withRouter } from 'react-router-dom';
import { ScrollTo, ScrollArea } from "react-scroll-to";
import {connect} from 'react-redux'
import MyUdacity from './udacity'
import Text1 from './slider'
import Fotos from './fotos'
import Hobby from './hobby'
import Portfolio from './portfolio'
 
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
}

class Main extends Component{
    constructor(props){
		super(props);
		this.state={
			visibilityTopPageArrow: 'hidden',
        }
        this.handleScroll = this.handleScroll.bind(this);
    } 
    
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll(e) {
        console.log('scroll event');
        console.log(e);
        console.log(window.scrollY);
        if (window.scrollY> this.props.status.height){
            console.log(window.scrollY);
            this.setState({
                visibilityTopPageArrow: 'visible',
            })
        }
        else {
            this.setState({
                visibilityTopPageArrow: 'hidden',
            })
        }
    }   
    
    render(){
         
    const heightSlider = Math.round(this.props.status.width*0.66683071*this.props.status.scale)
    const widthSlider = Math.round(this.props.status.width*this.props.status.scale)
    var y = window.scrollY
    
    if (this.props.status.scale<1){
        return(
            <div className='main'>
                <div className='main1blok'>
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
                <Portfolio/>
                <MyUdacity/>
                <Fotos/>
                <Hobby/>
                <ScrollTo>
                    {({ scrollTo }) => (
                        <a id='scrollBottom' style={{'visibility': this.state.visibilityTopPageArrow}}
                        onClick={() => scrollTo({ x: 0, y: 0 })}>
                            /\ Начало страницы /\
                        </a>
                        )}
                </ScrollTo>
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
            <Portfolio/>
            <MyUdacity/>
            <Fotos/>
            <Hobby/>
        </div>
        )
    }
}}
export default withRouter(connect(state=>({status: state.status}))(Main))
