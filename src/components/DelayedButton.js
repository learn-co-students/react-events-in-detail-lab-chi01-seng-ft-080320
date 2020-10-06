// Code DelayedButton Component Here
import React from 'react'


class DelayedButton extends React.Component {
    constructor(props){
        super()
    }

    handleClick = (e) =>{
        e.persist();
        setTimeout( () =>{
            this.props.onDelayedClick(e)
        }, this.props.delay)
        
    }

    render () {
        return(
            <button onClick ={this.handleClick}></button>
        )
    }
}

export default DelayedButton