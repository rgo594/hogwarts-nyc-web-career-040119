import React from 'react';


class HogsContainer extends React.Component{
  state = {
    hogDesc:
  }



  clickHandler = (e) => {
    this.props.hogs.map(hog => {
       if (hog.name === e.target.id){
         this.state.hogDesc.push()
       }
    })
  }

  createHogLis = () => {
    // let img = hog.name.split(" ").map(x => x.toLowerCase()).join("_")
    return this.props.hogs.map(hog => {
      let img = hog.name.split(" ").map(x => x.toLowerCase()).join("_")
      return <li id={hog.name} onClick={this.clickHandler} className="pigTile">{hog.name} <img src={require(`../hog-imgs/${img}.jpg`)}/></li>
    })
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
