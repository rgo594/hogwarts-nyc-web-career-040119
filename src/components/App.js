import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogCard from './HogCard.js'
import HogsContainer from './HogsContainer.js'
import hogs from '../porkers_data';

class App extends Component {
  state = {
    hogs: hogs
  }

  hogHandler = (e) => {
    let selectedHog = this.state.hogs.find(hog => {
      return hog.name === e.target.id
   })
   let hogIndex = this.state.hogs.indexOf(selectedHog)
    selectedHog = {...selectedHog, selected: true}
    let hogCopy = [...this.state.hogs]
    hogCopy.splice(hogIndex, 1, selectedHog)

    this.setState({
      hogs: hogCopy
    })
  }

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
            hogs={this.state.hogs}
            hogHandler={this.hogHandler}
          />
          < HogCard />
      </div>
    )
  }
}

export default App;
