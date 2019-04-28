import React, { Component } from 'react';
import InputField from '../element/InputField';
import SendForm from '../element/SendForm';
import Validator from '../utils/Validator';
import RequestSander from '../utils/RequestSander'


class Registration extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      email:'',
      password:'',
      check:'',
      error:'',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.changeErrorState = this.changeErrorState.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  changeErrorState(value){
    this.setState({error:value})
  }

  submitHandle(){
    if(Validator.isRegistrationValid(this.state, this.changeErrorState)) {
      this.sendRequest()
    }
  }

  redirect(){
    this.props.history.push("/enter");
  }

  sendRequest(){
    RequestSander.send(
        "/registration" +
        "?name=" + this.state.name +
        "&email=" + this.state.email +
        "&password=" + this.state.password,
        ()=>{
          this.redirect();
        },
        ()=>{
          this.setState({error:"user with such email already exists"});
        }
    );
  }


  handleNameChange(event){
    this.setState({ name: event.target.value})
  }

  handleEmailChange(event){
    this.setState({email:event.target.value})
  }

  handlePasswordChange(event){
    this.setState({password:event.target.value})
  }

  handleCheckChange(event){
    this.setState({check:event.target.value})
  }

  render() {
    return (
      <div>
          <p>REGISTRATION</p>
          <InputField name='Name' type='text' onChange = {this.handleNameChange}/>
          <InputField name='Email' type='text' onChange = {this.handleEmailChange}/>
          <InputField name='Password' type='password' onChange = {this.handlePasswordChange}/>
          <InputField name='Check' type='password' onChange = {this.handleCheckChange}/>
          <hr/>
          <SendForm submitHandle = {this.submitHandle}/>
          <p>{this.state.error}</p>
      </div>
    );
  }
}

export default Registration;
