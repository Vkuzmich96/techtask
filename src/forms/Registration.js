import React, { Component } from 'react';
import InputField from '../strings/InputField';
import SendRegistrationForm from '../strings/SendRegistrationForm';
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
  }

  changeErrorState(value){
    this.setState({error:value})
  }

  submitHandle(){
    // let flag = Validator.isEnterValid(this.state, this.changeErrorState);
    // if(flag) {
    //   fetch('http://localhost:8080/registration', {
    //     mode: "no-cors",
    //     method: "POST",
    //     body: JSON.stringify({a: 1, b: 'Textual content'}),
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
        // },
      // })
    let flag = Validator.isEnterValid(this.state, this.changeErrorState);
    if(flag) {
      RequestSander.sand("/registration?name=" +this.state.name + "&email=" + this.state.email +
          "&password=" + this.state.password
      );
    }
  }


  handleNameChange(event){
    let value = event.target.value;
    this.setState({ name: value})
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
          <SendRegistrationForm submitHandle = {this.submitHandle}/>
          <p>{this.state.error}</p>
      </div>
    );
  }
}

export default Registration;
