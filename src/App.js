import React, { Component } from 'react';
import rq from 'request-promise';

import './App.css';

class App extends React.Component {
  


  componentDidMount() {
    const rp = require('request-promise');
    const requestOptions = {
      method: 'GET',
      uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      qs: {
        'start': '1',
        'limit': '5000',
        'convert': 'USD'
      },
      headers: {
        'X-CMC_PRO_API_KEY': 'e8fc6284-adce-42cf-992c-19aadb498ff5'
      },
      json: true,
      gzip: true
    };
    
    rp(requestOptions).then(response => {
      console.log('API call response:', response);
    // }).then((data))  
      console.log(response.data[100].name);
    }).catch((err) => {
      console.log('API call error:', err.message);
    });
  }

  render () {
    return (
      <div>
        Hello
      </div>
    );
  }
}


export default App;
