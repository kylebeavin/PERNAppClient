import React, { Component } from 'react';
import Index from '../content/Index';

const Splash = (props) => {
    return(
        <div>
            <Index token={props.sessionToken} />
        </div>
    );
}

export default Splash;