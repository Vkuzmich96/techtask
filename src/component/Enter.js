import React, { Component } from 'react';
import InputField from '../element/InputField';
import SendForm from "../element/SendForm";
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
        this.sandRequest = this.sandRequest.bind(this);
        this.redirect = this.redirect.bind(this);
        this.logIn = this.logIn.bind(this);
    }

    submitHandle(){
        if(Validator.isEnterValid(this.state, this.onChangeErrorState)) {
            this.sandRequest();
        }
    }

    logIn(){
        this.props.changeLogIn(this.state.email);
    }

    redirect(){
        this.props.history.push("/update")
    }

    sandRequest(){
        RequestSander.send(
            "/enter" +
            "?email=" + this.state.email +
            "&password=" + this.state.password,
            ()=>{
                this.logIn();
                this.redirect();
            },
            ()=>{
                this.setState({error:"wrong login or password"})
            }
        );
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
                <InputField name='Login' type='text' onChange = {this.handleEmailChange}/>
                <InputField name='Password' type='password' onChange = {this.handlePasswordChange}/>
                <hr/>
                <SendForm submitHandle ={this.submitHandle} />
                <p>{this.state.error}</p>
            </div>
        );
    }
}

export default Enter;