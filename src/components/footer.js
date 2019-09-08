import React, { Component } from 'react'
import Img from 'react-image'
import './footer.css'


class Footer extends Component{
    render(){
        const Logo1 = () => <Img src='./img/icons/odnoklassniki.svg' alt="Одноклассники" className="icon"/>
        const Logo2 = () => <Img src='./img/icons/facebook.svg' alt="Facebook" className="icon"/>
        const Logo3 = () => <Img src='./img/icons/social.svg' alt="В контакте" className="icon"/>
        const Logo4 = () => <Img src='./img/icons/linkedin.svg' alt="LinkedIn" className="icon"/>        
        const Logo5 = () => <Img src='./img/icons/twitter(1).svg'alt="Twitter" className="icon"/>
        const Logo6 = () => <Img src='./img/icons/instagram.svg' alt="Instagram" className="icon"/>         
        return(
        <div className='footer'>
            <div className="social">
                <Logo1/>
                <Logo2/>
                <Logo3/>
                <Logo4/>
                <Logo5/>
                <Logo6/>
            </div>


            <div className="rights">
                <h6>Все права защищены &copy;
                <a href="http://slavalion.ru" title="SlavalionStudio">SlavalionStudio</a>  2019</h6>
            </div>
        </div>
       
        )
}}



export default (Footer)