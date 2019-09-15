import React, { Component } from 'react'
import {Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import './main.css'

class MyUdacity extends Component{
    render(){
        return(
        <div className='udacity'>
            <div id='block1'>
                <div id="udacityTextBlock1">
                    <h3> My Udacity блок</h3>
                    <p>В 2018 году по совету друзей я начал заниматься в дистанционной школе специалистов IT</p>
                    <p>UDACITY</p>
                    <p>За время обучения мне удалось пройти несколько курсов и, самое главное, выполняя задания получить несколько готовых проектов </p>
                    <p>Привожу эти проекты здесь.</p>
                    <p>Не судите строго-- это мои первые шаги в сданной сфере.</p>
                </div> 
                <div id='sertificatesblock'>
                    <div id='sert1' className='udasert' style={{'width': this.props.status.width*0.132, 'height': this.props.status.width*0.1016}}>
                    </div>
                    <div id='sert2' className='udasert' style={{'width': this.props.status.width*0.132, 'height': this.props.status.width*0.1016}}>
                    </div>
                </div>
            </div>
            <div id='centralblock'>
            </div>
            <div id='coursesBlock'>
            </div>  

        </div>
       
        )
}}

export default withRouter(connect(state=>({status: state.status}))(MyUdacity))