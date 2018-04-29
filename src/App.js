import React, { Component } from 'react';
import SiteBar from './home/Navbar';
import Footer from './home/Footer';
import Auth from './auth/Auth';
import Splash from './home/Splash';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Depot from './depot/DepotIndex';
import './App.css';

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

  signout = () => {
    this.setState({ sessionToken: '' })
    localStorage.clear();
  }

  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <Switch>
          <Route path='/' exact>
            <Splash sessionToken={this.state.sessionToken} />
          </Route>
          <Route path='/depot' exact>
            <Depot sessionToken={this.state.sessionToken} />
          </Route>
        </Switch>
      );
    } else {
      return (
        <Route path='/' exact>
          <Auth setToken={this.setSessionState} />
        </Route>
      );
    }
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <SiteBar clickSignout={this.signout} />
            {this.protectedViews()}
          </div>
        </Router>
        <Footer />
      </div>

    );
  }
}

export default App;
