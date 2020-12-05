import React from "react";
import loginImg from "./dog.svg";

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="base-container" ref={this.props.containerRef}>
            
            <div className="content">
            <div className="header"><h2>Login</h2></div>
                <div className="image">
                    <img src={loginImg} alt="pup" />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
            </div>
        </div>
        );
    }
}

export default Login;