import React from 'react';


class HogsContainer extends React.Component{

  createHogLis = () => {
    let img = hog.name.split(" ").map(x => x.toLowerCase()).join("_")
    return this.props.hogs.map(hog => <li>{hog.name} <img src={require(`./${img}.jpg`)}/></li>)
  }
  render(){
    console.log(this.props.hogs)
    return(
      <div>
        <ul>
          {this.createHogLis()}
        </ul>
      </div>
    )
  }
}

export default HogsContainer
