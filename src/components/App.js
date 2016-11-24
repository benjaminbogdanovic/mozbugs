import React, { Component } from 'react';
import BugList from './BugList';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <h1><i className="fa fa-bug fa-fw"/> Moz Bugs!</h1>
        <BugList />
      </div>
    );
  }
}

export default App;