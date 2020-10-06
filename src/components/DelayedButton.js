import React from 'react'

export default class DelayedButton extends React.Component{
    
    delayTime = e => {
        e.persist()
        window.setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
    }
    render() {
        return(
            <button onClick={this.delayTime}>Delay</button>
        )
    }
}
