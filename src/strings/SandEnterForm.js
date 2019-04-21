import React, { Component } from 'react';
import Validator from '../utils/Validator'
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
        let flag = Validator.isEnterValid(this.props.state, this.changeErrorState);
        if(flag) {
            let isLoged = RequestSander.sand("/enter?email=" + this.props.state.email +
                                                  "&password=" + this.props.state.password
            );
            this.props.changeLogIn(isLoged);
        }
    }

    render() {
        return(
            <div>
                <p>{this.props.state.email} {this.props.state.password}</p>
                <button
                    onClick={this.clickSandHandle}>sand</button>
                <p>{this.state.error}</p>
            </div>
        )
    }
}

export default SandRegistrationForm