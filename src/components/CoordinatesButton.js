import React from 'react';

export default class CoordinatesButton extends React.Component{
    
    clickHandler = e => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }
    render() {
        return (
            <button onClick={this.clickHandler}>Coordinates</button>
        )
    }
}
