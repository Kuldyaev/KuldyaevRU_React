import React, { Component } from 'react'
import Img from 'react-image'



class Footer extends Component{
    render(){
        const Logo1 = () => <Img src='./img/icons/odnoklassniki.svg' />
        const Logo2 = () => <Img src='./img/icons/facebook.svg' />
        const Logo3 = () => <Img src='./img/icons/social.svg' />
        const Logo4 = () => <Img src='./img/icons/linkedin.svg' />        
        const Logo5 = () => <Img src='./img/icons/twitter(1).svg'/>
        const Logo6 = () => <Img src='./img/icons/instagram.svg' />         
        return(
        <div className='footer'>
            <div id="social">
                <Logo1/>
                <Logo2/>
                <Logo3/>
                <Logo4/>
                <Logo5/>
                <Logo6/>
            </div>


            <div id="rights">
                <h6>Все права защищены &copy;
                <a href="http://slavalion.ru" title="SlavalionStudio">SlavalionStudio</a>  2019</h6>
            </div>
        </div>
       
        )
}}



export default (Footer)