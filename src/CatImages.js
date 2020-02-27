import React from 'react';
import logo from './logo.svg';

const API_KEY = '44e7905e-cb71-435f-8f16-9aac4539a871'

class MyCatImages extends React.Component {
  constructor() {
    super();
    this.state = {
      url: [],
    }
  }

  componentDidMount() {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=5`, {
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
      }
    })
    .then((results) => {
      return results.json();
    }).then(data => {
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

export default MyCatImages;
