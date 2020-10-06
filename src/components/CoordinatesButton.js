// Code CoordinatesButton Component Here
 import React from 'react'


 class CoordinatesButton extends React.Component {
     constructor(props){
         super()
     }

     handleClick = (e) =>{
         let arr = [e.clientX, e.clientY]
         this.props.onReceiveCoordinates(arr)
         
     }

     render () {
         return(
             <button onClick ={this.handleClick}></button>
         )
     }
 }

 export default CoordinatesButton