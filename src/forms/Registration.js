import React, { Component } from 'react';
import InputField from '../strings/InputField';
import SandRegistrationForm from '../strings/SandRegistrationForm';


class Registration extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      email:'',
      password:'',
      check:'',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }

  handleNameChange(value){
    this.setState({name:value})
  }

  handleEmailChange(value){
    this.setState({email:value})
  }

  handlePasswordChange(value){
    this.setState({password:value})
  }

  handleCheckChange(value){
    this.setState({check:value})
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
          <SandRegistrationForm state = {this.state}/>
      </div>
    );
  }
}

export default Registration;
