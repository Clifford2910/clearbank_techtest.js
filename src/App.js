import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyCatImages from './CatImages'

const API_KEY = '44e7905e-cb71-435f-8f16-9aac4539a871'


class MyApp extends React.Component {
  render() {
    return(
      <div className="container2">
        <div className="container1">
          <MyCatImages/>
        </div>
      </div>
    )
  }
}

export default MyApp;
