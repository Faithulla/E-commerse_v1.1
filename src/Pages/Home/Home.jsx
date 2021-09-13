import React from 'react';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="container">
            <div className="left-top">
                <div className="title-logo">Webify</div>
            </div>
                <div className="left-options">
                    <h3>Hoody</h3>
                </div>
        </div> );
    }
}
 
export default Home;