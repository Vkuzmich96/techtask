import React, { Component } from 'react';
import Registration from '../component/Registration'
import Enter from '../component/Enter'
import Update from '../component/Update'
import SuccessPage from '../element/SuccessPage'
import {BrowserRouter, Link, Redirect} from 'react-router-dom'

import Route from 'react-router-dom/Route'

class Router extends Component{
    constructor(props){
        super(props);
        this.state ={
            login:'',
            warning:'',
        };
        this.isLogIn = this.isLogIn.bind(this);
        this.changeLogInHandle =this.changeLogInHandle.bind(this);
        this.WrappedEnter = this.WrappedEnter.bind(this);
    }

    changeLogInHandle(value){
        this.setState({login:value});
    }

    isLogIn(props){
        if(this.state.login!==''){
            return <Update {...props} id={this.state.login}/>;
        }
        this.setState(
            {warning:"you should enter before updating"}
        );
        return <Redirect to="/enter"/>;
    }

    WrappedEnter (props) {
         return (<Enter {...props} changeLogIn={this.changeLogInHandle}/>);
    };



    render() {
        return(
            <BrowserRouter>
                <p>{this.state.warning}</p>
                <ul>
                    <li>
                        <Link to="/">Registration</Link>
                    </li>
                    <li>
                        <Link to="/enter">Enter</Link>
                    </li>
                    <li>
                        <Link to="/update">Update</Link>
                    </li>
                </ul>

                <div>
                    <Route exact path ="/" component={Registration}/>
                    <Route exact path ="/enter" component={this.WrappedEnter}/>
                    <Route exact path ="/update" component={this.isLogIn}/>
                    <Route exact path ="/success" component={SuccessPage}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default Router