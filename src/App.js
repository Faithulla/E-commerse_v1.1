import React, { Component } from 'react';
import Header from './Components/header/header';
import Bar from './Pages/Bar/Bar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <div>
    <Header/>
    <Bar/>
    </div> );
  }
}
 
export default App;