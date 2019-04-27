import React, { Component } from 'react';
import InputField from '../strings/InputField';

class Update extends Component {
    constructor(props){
        super(props);
        this.state={
            number:'',
            address:'',
        };

        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
    }


    handleNumberChange(value){
        this.setState({number:value})
    }

    handleAddressChange(value){
        this.setState({address:value})
    }


    render() {
        return (
            <div className="Update">
                <p>UPDATE</p>
                <InputField name='Phone number' type='text' onChange = {this.handleNumberChange}/>
                <InputField name='Address' type='text' onChange = {this.handleAddressChange}/>
                <hr/>
            </div>
        );
    }
}

export default Update;