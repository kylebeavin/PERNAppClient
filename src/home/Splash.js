import React, { Component } from 'react';
import Index from '../content/ContentIndex';

const Splash = (props) => {
    return(
        <div>
            <Index token={props.sessionToken} />
        </div>
    );
}

export default Splash;