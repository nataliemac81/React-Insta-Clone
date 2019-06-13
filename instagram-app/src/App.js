import React from 'react';
import dummyData from './dummy-data';

import './App.css';


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      data: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Insta-Clone</h1>  
      </div>
    );
  }
}


export default App;
