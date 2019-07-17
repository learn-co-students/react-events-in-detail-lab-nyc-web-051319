// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     onReceiveCoordinates: this.mouseCoordinates
  //   }
  // }

  mouseCoordinates = (e) => {
    return (
      this.props.onReceiveCoordinates([e.screenX, e.screenY])
      )
  }

  render() {
    console.log(this.mouseCoordinates)
    return (
      <button className="coordinatesButton" onClick={this.mouseCoordinates}>Test Button</button>
    )
  }
}