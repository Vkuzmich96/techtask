import React, { Component } from 'react';
import InputField from '../element/InputField';
import SendForm from "../element/SendForm";
import RequestSander from "../utils/RequestSander";
import Validator from "../utils/Validator";

class Update extends Component {
    constructor(props){
        super(props);
        this.state={
            number:'',
            address:'',
            error:'',
        };

        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.submitHandle = this.submitHandle.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
        this.onChangeErrorState = this.onChangeErrorState.bind(this);
    }

    onChangeErrorState(value){
        this.setState({error:value})
    }

    submitHandle(){
        if(Validator.isUpdateValid(this.state, this.onChangeErrorState)) {
            this.sendRequest()
        }
    }

    sendRequest(){
        RequestSander.send(
            "/update" +
            "?id=" + this.props.id +
            "&number=" + this.state.number +
            "&address=" + this.state.address,
            ()=>{
                this.props.history.push("/success")
            },
            ()=>{
            }
        );
    }

    handleNumberChange(event){
        this.setState({number:event.target.value})
    }

    handleAddressChange(event){
        this.setState({address:event.target.value})
    }

    render() {
        return (
            <div className="Update">
                <p>UPDATE</p>
                <InputField name='Phone number' type='text' onChange = {this.handleNumberChange}/>
                <InputField name='Address' type='text' onChange = {this.handleAddressChange}/>
                <hr/>
                <SendForm submitHandle ={this.submitHandle}/>
                <p>{this.state.error}</p>
            </div>
        );
    }
}

export default Update;