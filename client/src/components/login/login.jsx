import React from "react";
import loginImg from "./dog.svg";
import API from "../../utils/API"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userName: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
        userBio: "",
        petBio: ""}
    }



    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
        // this.setState({ username: event.target.value });
    };


    handleSubmit = e => {
        e.preventDefault();
        API.userLogin({

            userName: this.state.userName,
            password: this.state.password
            // userId: 
            // user: userRef.current.value
        })
            .then(result => {
                console.log(result)
                // this.setState(state => ({
                //     email: result.email,
                //     userName: result.userName,
                    
                // }))
                    
                
            })

            .catch(err => console.log(err));

        
        

    };





    render() {
        return (<div className="base-container" ref={this.props.containerRef}>

            <div className="content">
                <div className="headerChunk">
                <div className="header"><h2>Login</h2></div>
                <div className="image">
                    <img src={loginImg} alt="pup" />
                </div>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="userName" placeholder="username" value={this.state.userName} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange} />
                    </div>
                    <button type="submit" onClick={this.handleSubmit}>Login</button>
                </div>
            </div>
            <div className="footer">
            </div>
        </div>
        );
    }
}

export default Login;