import React, { Component } from 'react';

class InputField extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        };

        this.changeValueHandle = this.changeValueHandle.bind(this);
    }

    changeValueHandle(event){
        this.setState({value:event.target.value});
        this.props.onChange(this.state.value)
    }

    render() {
        return(
            <div>
                <p>{this.props.name} is {this.state.value}</p>
                <input
                    type={this.props.type}
                    value={this.state.value}
                    onChange={this.changeValueHandle}
                />
            </div>
        )
    }
}

export default InputField