import React from 'react';

const API_KEY = '44e7905e-cb71-435f-8f16-9aac4539a871'

class MyCatDescriptions extends React.Component {
  constructor() {
    super();
    this.state = {
      description: [],
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
      let description = data.map(function(desc) {
        return(
          <div key={desc.results}>
            {desc.temperament}
          </div>
        )
      })
      this.setState({
        description: description
      });
    })
  }

  render() {
    return(
      <div className="container2">
        <div className="container1">
          <ul>
           {this.state.description}
          </ul>
        </div>
      </div>
    )
  }
}

export default MyCatDescriptions;
