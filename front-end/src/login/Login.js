import React, { Component } from 'react';
import { hashHistory } from 'react-router';

class Login extends Component{
	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this)
		this.state = {
			uiMessage:""
		}
    }
    
    handleLogin(event){
        event.preventDefault();
        let id = event.target[0].value;
        let pw = event.target[1].value;
        if (id === "paul" && pw === "isthebest" ) {
            this.setState({
                uiMessage:""
            });
            hashHistory.push({pathname:'/admin%23$'});
        } else {
            this.setState({
                uiMessage:"Invalid id and password"
            });
        }
        
	}

    render(){
        return(
            <div>
                <form onSubmit={this.handleLogin}>
                    <input className="loginId" type="text" placeholder="id"/>
                    <input className="loginId" type="password" placeholder="password"/>
                    <input type="submit" value="submit" />
                </form>
                <div>{this.state.uiMessage}</div>
            </div>
        );
    }
}


export default Login;
