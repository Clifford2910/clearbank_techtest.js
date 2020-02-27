import React from 'react';

const API_KEY = '44e7905e-cb71-435f-8f16-9aac4539a871'

class MyCatBreeds extends React.Component {
  constructor() {
    super();
    this.state = {
      breeds: [],
    }
  }

  componentDidMount() {
    fetch(`https://api.thecatapi.com/v1/breeds`, {
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
      }
    })
    .then((results) => {
      return results.json();
    }).then(data => {
      let breeds = data.map(function(breed) {
        return(
          <div key={breed.results}>
            {breed.name}
          </div>
        )
      })
      this.setState({
        breeds: breeds
      });
    })
  }

  render() {
    return(
      <div className="container2">
        <div className="container1">
          <ul>
            {this.state.breeds}
          </ul>
        </div>
      </div>
    )
  }
}

export default MyCatBreeds;
