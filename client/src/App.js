import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
class App extends Component {
   constructor(){
       super();
       this.state ={users: []};
   }
   componentDidMount() {
          fetch('/testing')
            .then(res => {
                console.log(res);
                return res.json()
             })
            .then(users => { 
                console.log(users); 
                this.setState({ users })
             });
         }
   render() {
        return (
            <div className="App">
                <h1>Users</h1>
                {this.state.users.map(user =>
                <div key={user.id}>user: {user.firstName} Chips: {user.chips}</div>
              )}
            </div>
        );
    }
}
export default App;