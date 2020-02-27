import React from 'react';
import './App.css';
import MyCatImages from './CatImages'
import MyCatBreeds from './BreedLists'

class MyApp extends React.Component {
  render() {
    return(
      <div className="container2">
        <MyCatBreeds/>
          <div className="container1">
            <MyCatImages/>
          </div>
      </div>
    )
  }
}

export default MyApp;
