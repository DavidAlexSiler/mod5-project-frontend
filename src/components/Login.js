import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import currentInput from '../images/currentInput.png'
class Login extends Component {

    renderFrontPage = () => {
        return (
            <div className='login'>
            <img src={currentInput} alt="current input" style={{ width: 500 }} />
            <Button  as="a" href="http://localhost:3000/api/v1/login" >
            find your inspiration.</Button>
            </div>
            ) 
        } 
        
    render() {
        return (
            <div className='front-page' >
                {this.renderFrontPage()} 
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return state.login
}

export default connect(mapStateToProps)(Login)