import React, { Component } from 'react';
import SiteBar from './home/Navbar';
import Auth from './auth/Auth';
import Splash from './home/Splash';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Depot from './depot/DepotIndex';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: '',
      buttonPressed: false
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

  depot = () => { 
      this.setState({ buttonPressed: true})
    }
  


  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <Switch>
          <Route path='/' exact>
            <Splash sessionToken={this.state.sessionToken} />
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
      <Router>
        <div>
          <SiteBar clickSignout={this.signout} clickDepot={this.depot} t={this.state.buttonPressed}/>
          {
            this.state.buttonPressed && this.state.sessionToken ? <Depot sessionToken={this.state.sessionToken}/> : this.protectedViews()
          }
          
        </div>
      </Router>
    );
  }
}

export default App;
