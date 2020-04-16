import React, { Component } from 'react';
import rq from 'request-promise';

import './App.css';

class App extends React.Component {
  


  componentDidMount() {
    const rp = require('request-promise');
    const requestOptions = {
      method: 'GET',
      uri: 'https://bitcoinfees.earn.com/api/v1/fees/recommended'
    };
    
    rp(requestOptions).then(response => {
      console.log(response);
      console.log(response["fastestFee"]);
      console.log(response.fastestFee);
    // }).then((data))  
    }).catch((err) => {
      console.log('API call error:', err.message);
    });
  }

  render () {
    return (
      <div>
        yo.
      </div>
    );
  }
}


export default App;
