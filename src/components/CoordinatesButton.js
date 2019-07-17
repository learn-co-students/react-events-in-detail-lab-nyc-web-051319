import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    handleClick = e => {
        console.log(e)
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>coordinates</button>
            </div>
        )
    }
}

