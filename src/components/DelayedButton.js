// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component{

    handleClick = (event) => {
        event.persist()
        const clickDelay = () => {this.props.onDelayedClick(event)}
        window.setTimeout(clickDelay, this.props.delay)
    } 


    render(){
        return(
            <button onClick={this.handleClick}></button>
        )
    }
}

export default DelayedButton