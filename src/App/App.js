import React, { Component } from 'react'; 
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import Backlog from '../Backlog/Backlog';

class App extends Component {
  render () {
    return (
      <div className="App">
        
        {/* <LoginPage /> */}
        <Backlog />
      </div>
  )};
}

export default App;
