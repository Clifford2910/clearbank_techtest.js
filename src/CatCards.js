import React from 'react';
import MyCatImages from './CatImages'
import MyCatBreeds from './BreedLists'
import MyCatDescriptions from './DescriptionLists.js'

const API_KEY = '44e7905e-cb71-435f-8f16-9aac4539a871'

class MyCatCards extends React.Component {
  constructor() {
    super();
    this.state = {
      cats: []
    }
  }

  componentDidMount() {
    fetch(`https://api.thecatapi.com/v1/breeds?limit=20`, {
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
      }
    })
    .then((results) => {
      return results.json();
    }).then(data => {
      let cats = data.map(function(info) {
        console.log(info)
        return(
          <div>
            {`NAME: ${info.name}`}
            <br />
            {`TEMPERAMENT: ${info.temperament}`}
            <br />
            {`DESCRIPTION: ${info.description}`}
            <br />
            <br />
          </div>
        )
      })
      this.setState({
        cats: cats
      });
      console.log(this.state.cats)
    })
  }

  render() {
      return(
        <div className="container2">
          <div className="container1">
            <ul>
              {this.state.cats}
            </ul>
          </div>
        </div>
      )
    }
  }

export default MyCatCards;
