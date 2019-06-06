import React from 'react';


class HogsContainer extends React.Component{
  state = {
    hogDesc: []
  }



  // clickHandler = (e) => {
  //
  // }

  createHogLis = () => {
    // let img = hog.name.split(" ").map(x => x.toLowerCase()).join("_")
    return this.props.hogs.map(hog => {
      let img = hog.name.split(" ").map(x => x.toLowerCase()).join("_")
      if (hog.selected) {
        return <li id={hog.name} onClick={this.props.hogHandler} className="pigTile">
          <img src={require(`../hog-imgs/${img}.jpg`)}/>
          <p>{hog.name}</p>
          <p>{hog.specialty}</p>
        </li>
      }else{
        return <li id={hog.name} onClick={this.props.hogHandler} className="pigTile">
          <img src={require(`../hog-imgs/${img}.jpg`)}/>
          {hog.name}
        </li>
      }
    })
  }

  render(){
    // console.log(this.props.hogs)
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
