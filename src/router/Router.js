import React, { Component } from 'react';
import Registration from '../forms/Registration'
import Enter from '../forms/Enter'
import Update from '../forms/Update'
import {BrowserRouter, Link, Redirect} from 'react-router-dom'
import Route from 'react-router-dom/Route'

class Router extends Component{
    constructor(props){
        super(props);
        this.state ={
            isLog:false,
            warning:'',
        };
        this.isLogIn = this.isLogIn.bind(this);
        this.changeLogInHandle =this.changeLogInHandle.bind(this);
    }

    changeLogInHandle(value){
        this.setState({isLog:value});
    }

    isLogIn(){
        if(this.state.isLog){
            return <Update/>;
        }
        this.setState({warning:"you should enter before updating"});
        return <Redirect to="/enter"/>;
    }

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
                    <Route exact path ="/enter" render={()=>(<Enter changeLogIn={this.changeLogInHandle}/>)}/>
                    <Route exact path ="/update" render={this.isLogIn}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default Router