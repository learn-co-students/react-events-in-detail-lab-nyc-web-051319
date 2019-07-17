import React from 'react';

class CoordinatesButton extends React.Component {
  coordinates = (e) => {
    e.persist()
    const xy = []
    xy.push(e.screenX)
    xy.push(e.screenY)
    this.props.onReceiveCoordinates(xy)
  }
  render(){
    return <button onReceiveCoordinates={this.xy} onClick={this.coordinates} id="coordinates">Coordinates Button</button>
  }

}

export default CoordinatesButton
