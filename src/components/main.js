import React, { Component } from 'react'
import Slider from './slider'
import './main.css'

import {Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'




class Main extends Component{
    render(){
    const heightSlider = Math.round(this.props.status.width*0.75*0.9)
    const widthSlider = Math.round(this.props.status.width*0.9)
        
        return(
        <div className='main'>
            <div className='mainslider' style={{'width': widthSlider, 'height': heightSlider}}>
                <Slider/>
            </div>
            <div className='mainmessage'>
                <h3> Всем привет!</h3>
                 <p>Меня зовут Вячеслав и это мой персональный сайт.</p>
                 <p>Здесь планирую разместить информацию о себе и своих проектах.</p>
                 <p>В настоящее время нахожусь в США, где повышаю уровень знания английского и
                    параллельно решил познакомиться с языком компьютеров.</p>
                 <p>Результатом последнего увлечения и стал этот сайт.</p>
                 <p>Надеюсь, что этот проект станет информативным для тех, кому нужна информация о моей скромной персоне.</p>




                  <p> Пока работает не все, НО cейчас я работаю над тем,</p>
                  <p>  чтобы в ближайшее время сделать этот раздел сайта удобным и полезным.</p>
                  <p>с уважением,</p>
                  <p>Кульдяев Вячеслав</p>
              </div>
        </div>
       
        )
}}


export default withRouter(connect(state=>({status: state.status}))(Main))