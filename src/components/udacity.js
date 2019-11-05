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
                    <p>Не судите строго-- это мои первые шаги в данной сфере.</p>
                </div> 
                <div id='sertificatesblock'>
                    <a href="https://confirm.udacity.com/KUCPMC59" title="UdaCityCert1" id='sert1' className='udasert' style={{'width': this.props.status.width*0.132, 'height': this.props.status.width*0.1016}} />
                    <a href="https://confirm.udacity.com/LUJP5RRK" title="UdaCityCert2" id='sert2' className='udasert' style={{'width': this.props.status.width*0.132, 'height': this.props.status.width*0.1016}} />                    
                </div>
            </div>
            <div id='centralblock'>
            </div>
            <div id='coursesBlock'>
                <div className='udacourse'>
                   <Link className='menuitem' to='/udacity/courses/1'>
                       <div className='udacourselogo' id='udacourse1'>
                       </div>
                   </Link>
                </div>
                <div className='udacourse'>
                    <Link className='menuitem' to='/udacity/courses/2'>
                       <div className='udacourselogo' id='udacourse2'>
                       </div>
                   </Link>
                </div>
                <div className='udacourse'>
                    <Link className='menuitem' to='/udacity/courses/3'>
                       <div className='udacourselogo' id='udacourse3'>
                       </div>
                   </Link>
                </div>
               <div className='udacourse'>
                    <Link className='menuitem' to='/udacity/courses/4'>
                       <div className='udacourselogo' id='udacourse4'>
                       </div>
                    </Link>   
                </div>
            </div>  
        </div>
    )
}}
export default withRouter(connect(state=>({status: state.status}))(MyUdacity))
