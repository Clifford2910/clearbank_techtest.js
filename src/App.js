import React from 'react';
import './App.css';
import MyCatImages from './CatImages'
import MyCatBreeds from './BreedLists'
import MyCatDescriptions from './DescriptionLists'
import MyCatCards from './CatCards'

class MyApp extends React.Component {
  render() {
    return(
      <div>
        <h1> CATS! </h1>
        <div className="container1">
          <MyCatCards/>
        </div>
      </div>
    )
  }
}

export default MyApp;
