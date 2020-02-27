import React from 'react';
import logo from './logo.svg';
import './App.css';

const API_KEY = '44e7905e-cb71-435f-8f16-9aac4539a871'


class MyCats extends React.Component {
  constructor() {
    super();
    this.state = {
      url: [],
    }
  }

  componentDidMount() {
    fetch('https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}')
    .then((results) => {
      return results.json();
    }).then(data => {
      console.log(data)
      let url = data.map(function(pic) {
        return(
          <div key={pic.results}>
            <img src={pic.url} />
          </div>
        )
      })
      this.setState({
        url: url
      });
    })
  }

  render() {
    return(
      <div className="container2">
        <div className="container1">
          {this.state.url}
        </div>
      </div>
    )
  }
}

export default MyCats;
