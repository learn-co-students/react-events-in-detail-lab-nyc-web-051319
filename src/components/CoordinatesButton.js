// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {

  findCoordinates = (event) => {
    event.persist()
    let xCoordinate = event.clientX
    let yCoordinate = event.clientY
    let arr = [xCoordinate, yCoordinate]
    this.props.onReceiveCoordinates(arr)
  }

  render(){
    return (
      <button onClick={this.findCoordinates} >Click</button>
    )
  }
}
