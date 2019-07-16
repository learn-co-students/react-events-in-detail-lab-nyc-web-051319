// Code CoordinatesButton Component Here

import React from 'react'

class CoordinatesButton extends React.Component {

  XandY = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <div>
      <button onClick={this.XandY}></button>
      </div>
    )
  }
}

export default CoordinatesButton
