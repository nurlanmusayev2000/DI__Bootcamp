import React, { Component } from 'react'

class Cars extends Component{
constructor(){
	super();
	this.state ={color:"red"}
}
// !!! props istifade zamani constructorda da qeyd etmek daha duzgun yazilisdir
	render(){
const {carModel} = this.props

	return	<h1>This car is {this.state.color} {carModel} </h1>
	}
}

export default Cars