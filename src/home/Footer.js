import React, { Component } from 'react';
import {
    Row
  } from 'reactstrap';

  class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Row>
          <p>&copy;The Depot @ registered trademark</p>
        </Row>
      </footer>
    )
  }
}

export default Footer;