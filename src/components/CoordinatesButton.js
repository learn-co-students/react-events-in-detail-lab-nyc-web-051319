import React, { Component } from 'react'
// Code CoordinatesButton Component Here

export default class CoordinatesButton extends Component {

  findCordinates = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.findCordinates} ></button>
    )
  }
}
