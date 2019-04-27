import React, { Component } from 'react';
import InputField from '../strings/InputField';
import SendForm from "../strings/SendForm";
import RequestSander from '../utils/RequestSander'
import Validator from "../utils/Validator";


class Enter extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            error:'',
        };

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.submitHandle = this.submitHandle.bind(this);
        this.onChangeErrorState = this.onChangeErrorState.bind(this);
    }

    submitHandle(){
        let flag = Validator.isEnterValid(this.state, this.onChangeErrorState);
        if(flag) {
            let isLoged = RequestSander.sand(
                "/enter" +
                "?email=" + this.state.email +
                "&password=" + this.state.password
            );
            this.props.changeLogIn(isLoged);
        }
    }

    onChangeErrorState(value){
        this.setState({error:value})
    }

    handleEmailChange(event){
        this.setState({email:event.target.value})
    }

    handlePasswordChange(event){
        this.setState({password:event.target.value})
    }


    render() {
        return (
            <div className="Registration">
                <p>ENTER</p>
                <InputField name='Email' type='text' onChange = {this.handleEmailChange}/>
                <InputField name='Password' type='password' onChange = {this.handlePasswordChange}/>
                <hr/>
                <SendForm submitHandle ={this.submitHandle} />
            </div>
        );
    }
}

export default Enter;