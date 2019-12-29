import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import Login from './Components/Login';
import Routes from './Routes';
class App extends Component {
  constructor() {
    console.log('app.js constructor');
    super();
    this.state = {
      users: [
        { id: 1910, name: 'ankit', age: 23 },
        { id: 1911, name: 'saurav', age: 22 },
        { id: 1912, name: 'gaurav', age: 21 }
      ]
    };
  }

  componentWillMount = () => {
    console.log(this);
    console.log('app.js componentWillMount');
  };
  componentDidMount = () => {
    console.log('app.js componentDidMount');
  };

  componentWillReceiveProps = (a, b) => {
    console.log('app.js componentWillReceiveProps');
    console.log('a', a);
    console.log('b', b);
  };
  componentWillUpdate = (a, b) => {
    console.log('app.js componentWillUpdate');
    console.log('a', a);
    console.log('b', b);
  };
  shouldComponentUpdate = (a, b) => {
    console.log('app.js shouldComponentUpdate');
    return true;
  };
  componentDidUpdate = (a, b) => {
    console.log('app.js componentDidUpdate');
    console.log('a', a);
    console.log('b', b);
  };
  deleteUser = id => {
    console.log('did', id);
    let userIndex = this.state.users.findIndex(user => {
      return (user.id = id);
    });
    let newUser = [...this.state.users];
    newUser.splice(userIndex, 1);

    this.setState({
      users: newUser
    });
  };
  updateUser = (event, id) => {
    console.log(event.target.value);
    let userIndex = this.state.users.findIndex(user => {
      return (user.id = id);
    });

    let user = { ...this.state.users[userIndex] };

    user.name = event.target.value;
    let userArray = [...this.state.users];
    userArray[userIndex] = user;
    this.setState({
      users: userArray
    });
  };
  render() {
    console.log('app.js render');
    return (
      <div className="App">
        <Routes></Routes>
      </div>
    );
  }
}

export default App;
