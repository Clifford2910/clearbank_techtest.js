import React from 'react';
import './App.css';
import MyCatImages from './CatImages'
import MyCatBreeds from './BreedLists'
import MyCatDescriptions from './DescriptionLists.js'

class MyApp extends React.Component {
  render() {
    return(
      <div>
        <h1> CATS! </h1>
        <div className="container3">
          <MyCatDescriptions/>
            <div className="container2">
              <MyCatBreeds/>
                <div className="container1">
                  <MyCatImages/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default MyApp;
