import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogCard from './HogCard.js'
import HogsContainer from './HogsContainer.js'
import hogs from '../porkers_data';

class App extends Component {
  // state = {
  //   hogs: []
  // }
  //

  // componentDidMount(){
  //   fetch('http://localhost:3000/porkers_data')
  //   .then(resp => resp.json())
  //   .then(console.log)
  // }
  render() {
    return (
      <div className="App">
          < Nav />
          < HogsContainer
            hogs={hogs}
          />
          < HogCard />
      </div>
    )
  }
}

export default App;
