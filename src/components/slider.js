import React, { Component } from 'react'

import {Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import './main.css'



class Text1 extends Component{
  render(){
    return (
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
                  
                <p>Ширина экрана{String(this.props.status.width)} </p>
                <p>Высота экрана{String(this.props.status.height)} </p>
                <p>Масштаб {String(this.props.status.scale)} тип {typeof(this.props.status.scale)} </p>
             </div>
    )
    }  
}



export default withRouter(connect(state=>({status: state.status}))(Text1))