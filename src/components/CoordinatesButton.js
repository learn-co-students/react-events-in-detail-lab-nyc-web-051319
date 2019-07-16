import React from 'react';

class CoordinateButton extends React.Component {

    handleClick = (event) => {
        const coordinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinates)
    }
    

    render () {
        // console.log(this.props)
        return (
            <button onClick={this.handleClick}>Coordinates</button>
        )
    }
}
export default CoordinateButton;