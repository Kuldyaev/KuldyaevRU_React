import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Img from 'react-image'
import './main.css'

const LogoGallery = () => <Img src='./img/icons/frame.svg' alt="gallery" className="iconPhoto"/>
const LogoMapGallery = () => <Img src='./img/icons/camera.svg' alt="photomap" className="iconPhoto"/>

class Fotos extends Component{
    render(){
        return(
        <div className='fotos'>
            <div id='photoText'>
                <p>Когда впервые мне попал в руки фотоаппрата я и представить не мог в каких замечательных местах мне удастся фотографировать. </p>
                <p>здесь лишь небольшая часть снимков, которые  мне кажется удачными.</p>
            </div>
            <div id='links'>
                <Link className='logoPhoto' to='/udacity/photos/gallery' id='logoGallery'><LogoGallery/></Link>
                <Link className='logoPhoto' to='/udacity/photos/map'><LogoMapGallery/></Link>
            </div>    
        </div>
        )
    }
}
export default (Fotos)