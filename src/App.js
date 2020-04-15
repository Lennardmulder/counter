import React, { Component } from 'react';

import './App.css';

class App extends React.Component {

  componentDidMount() {
    fetch('https://localbitcoins.com/api/fees/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
      console.log(this);
    })
    .catch(console.log)
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
            Blockchain vs the State
        </header>
      </div>
    );
  }
}


export default App;
