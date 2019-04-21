import React, { Component } from 'react';
import InputField from '../strings/InputField';
import SandEnterForm from '../strings/SandEnterForm';


class Enter extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
        };

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }


    handleEmailChange(value){
        this.setState({email:value})
    }

    handlePasswordChange(value){
        this.setState({password:value})
    }


    render() {
        return (
            <div className="Registration">
                <p>ENTER</p>
                <InputField name='Email' type='text' onChange = {this.handleEmailChange}/>
                <InputField name='Password' type='password' onChange = {this.handlePasswordChange}/>
                <hr/>
                <SandEnterForm state = {this.state} changeLogIn={this.props.changeLogIn}/>
            </div>
        );
    }
}

export default Enter;