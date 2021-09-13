import React from 'react';

import './Bar.scss'
class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="container">
            <div className="left-top">
                <div className="title-logo">Rayal</div>
            </div>
                <div className="left-options">
                    <h3>Hoody</h3>
                </div>
        </div> );
    }
}
 
export default Bar;