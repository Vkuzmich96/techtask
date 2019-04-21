import React, { Component } from 'react';
import InputField from '../strings/InputField';

class Update extends Component {
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
            <div className="Update">
                <p>UPDATE</p>
                <InputField name='Email' type='text' onChange = {this.handleEmailChange}/>
                <InputField name='Password' type='password' onChange = {this.handlePasswordChange}/>
                <hr/>
            </div>
        );
    }
}

export default Update;