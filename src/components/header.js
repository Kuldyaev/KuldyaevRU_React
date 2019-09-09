import React, { Component } from 'react'
import Img from 'react-image'
import './header.css'

class Header extends Component{
    render(){
        const LogoRu = () => <Img src='./img/icons/ru.svg' alt="rus language" className="iconLanguage"/>
        
        return(
        <div className='header'>
            <div className='headerBox1'>
                <p className="letters">Вячеслав Кульдяев</p>
            </div>
            <div className='headerBox2'>    
                <LogoRu/>
                <p id='Lang'>Russian</p>
            </div>
        </div>
       
        )
}}



export default (Header)