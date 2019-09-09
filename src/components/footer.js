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
        const Logo7 = () => <Img src='./img/icons/email.svg' alt="e-mail link" className="icon"/>
        const Logo8 = () => <Img src='./img/icons/skype.svg' alt="skype" className="icon"/>
        const Logo9 = () => <Img src='./img/icons/github.svg' alt="github" className="icon"/>
        return(
        <div className='footer'>
            <div className="social">
                <a href="https://github.com/Kuldyaev" title="github"><Logo9/></a>
                <a href="https://ok.ru/vyacheslav.kuldyaev" title="Однокласники"><Logo1/></a>
                <a href="https://www.facebook.com/slavalion" title="FaceBook"><Logo2/></a>
                <a href="https://vk.com/kuldyaev" title="Вконтакте"><Logo3/></a>
                <a href="https://www.linkedin.com/in/viacheslav-kuldyaev-3b7a07a5" title="LinkedIn"><Logo4/></a>
                <Logo5/>
                 <a href="https://www.instagram.com/vyacheslavkuldyaev" title="Instagram"><Logo6/></a>
                <Logo8/>
                <a href="" title="E-MAIL"><Logo7/></a>
	
                
            </div>


            <div className="rights">
                <h6>Все права защищены &copy;
                <a href="http://slavalion.ru" title="SlavalionStudio">SlavalionStudio</a>  2019</h6>
            </div>
        </div>
       
        )
}}



export default (Footer)