import React, { Component } from 'react';
import SiteBar from './home/Navbar';
import Auth from './auth/Auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: ''
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });
  }

  render() {
    return (
      <Router>
        <div>
          <SiteBar />
          <Auth setToken={this.setSessionState}/>
        </div>
      </Router>
    );
  }
}

export default App;
