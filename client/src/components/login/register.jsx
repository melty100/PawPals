import React from "react";
import loginImg from "./dog.svg";

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="base-container" ref={this.props.containerRef}>

            <div className="content">
                <div className="headerChunk">
                    <div className="header"><h2>Register</h2></div>
                    <div className="image">
                        <img src={loginImg} alt="pup" />
                    </div>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
                {/* <button type="button btn success" className="btn">Register</button> */}
            </div>
        </div>
        );
    }
}

export default Register;