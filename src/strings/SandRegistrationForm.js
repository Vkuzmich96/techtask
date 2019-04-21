import React, { Component } from 'react';
import Validator from '../utils/Validator';
import RequestSander from '../utils/RequestSander'

class SandRegistrationForm extends Component{
    constructor(props){
        super(props);
        this.state={
            error:'',
        };
        this.clickSandHandle = this.clickSandHandle.bind(this);
        this.changeErrorState = this.changeErrorState.bind(this);
    }

    changeErrorState(value){
        this.setState({error:value})
    }

    clickSandHandle(){
        let flag = Validator.isRegistrationValid(this.props.state, this.changeErrorState);
        if(flag){
            RequestSander.sand("/registration?name="+this.props.state.name+
                                    "&email="+this.props.state.email+
                                    "&password="+this.props.state.password
            )
        }
    }

    render() {
        return(
            <div>
                <p>{this.props.state.name} {this.props.state.email} {this.props.state.password}</p>
                <button
                    onClick={this.clickSandHandle}>sand</button>
                <p>{this.state.error}</p>
            </div>
        )
    }
}

export default SandRegistrationForm