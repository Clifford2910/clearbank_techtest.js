import React from 'react';
import MyCatImages from './CatImages'
import MyCatBreeds from './BreedLists'
import MyCatDescriptions from './DescriptionLists.js'

class MyCatCards extends React.Component {
  constructor() {
    super();
    this.state = {
      cats: []
    }
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

export default MyCatCards;
